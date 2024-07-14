import BasePage from '@/components/page-utils/BasePage';
import { DeckListItem } from '@/components/ui/DeckListItem';
import { MessageDialog } from '@/components/ui/Modal';
import * as mutations from '@/graphql/mutations';
import * as queries from '@/graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { revalidatePath } from 'next/cache';
import { useEffect, useState } from 'react';

const client = generateClient();
type FetchDeck = {
    id: string;
    user_id: string;
    name: string;
    cards: { items: []; };
    createdAt: string;
    updatedAt: string;
};

export default function DeckPage() {
    const { user } = useAuthenticator((context) => [context.route]);
    const [isOpen, setIsOpen] = useState(false);
    const [newDeckName, setNewDeckName] = useState('');
    const [allDecks, setAllDecks] = useState<FetchDeck[]>([]);

    const handleCancel = () => {
        setIsOpen(false);
        setNewDeckName('');
    };

    const changeNewDeckName = (event: any): void => {
        if (!event?.target?.value) return setNewDeckName('');
        return setNewDeckName(event.target.value);
    };

    useEffect(() => {
        fetchDecks();
    }, [user]);

    const fetchDecks = async () => {
        if (user === undefined) return;
        try {
            await client.graphql({
                query: queries.decksByUser_idAndUpdatedAt,
                variables: { user_id: user.userId },
            })
                .then((value) =>
                    setAllDecks(
                        value.data.decksByUser_idAndUpdatedAt
                            .items as FetchDeck[],
                    )
                );
        } catch (e) {
            console.log('デッキの取得に失敗しました。');
            console.log(e);
        }
    };

    const createDeck = async () => {
        handleCancel();
        try {
            const newDeck = {
                name: newDeckName,
                user_id: user.userId,
            };
            await client.graphql({
                query: mutations.createDeck,
                variables: { input: newDeck },
            });
            fetchDecks();
        } catch (e) {
            console.log('デッキの作成に失敗しました。');
            console.log(e);
        }
    };

    return (
        <BasePage allowAuthenticate={true}>
            <MessageDialog
                title='デッキ作成'
                buttonLabel='作成'
                open={isOpen}
                onCancel={() => handleCancel()}
                onOk={() => createDeck()}
            >
                <div className='flex flex-col w-full mb-8'>
                    <label htmlFor=''>デッキ名</label>
                    <input
                        className='border-2'
                        type='text'
                        onChange={(event) => changeNewDeckName(event)}
                    />
                </div>
            </MessageDialog>
            <main className='size-11/12 mx-auto pt-14'>
                <div className='flex justify-between border-b-2 mb-4'>
                    <h2>デッキリスト</h2>
                    <button onClick={() => setIsOpen(true)}>デッキ追加</button>
                </div>
                {allDecks.map((deck, i) => (
                    <DeckListItem
                        key={i}
                        name={deck.name}
                        deckId={deck.id}
                        cardCount={deck.cards.items.length}
                        // perfect={deck.perfect}
                        // good={deck.good}
                        // Fight={deck.Fight}
                    />
                ))}
            </main>
        </BasePage>
    );
}
