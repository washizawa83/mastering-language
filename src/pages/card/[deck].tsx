import { DeckListItem } from '@/components/ui/DeckListItem';
import { MLButton } from '@/components/ui/MLButton';
import { MLPageHeader } from '@/components/ui/MLPageHeader';
import * as queries from '@/graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const client = generateClient();

type FetchCard = {
    id: string;
    user_id: string;
    sentence: string;
    meaning: string;
    image: string;
    etymology: string;
    next_answer_date: string;
    previous_answer_date: string;
    retention_state: boolean;
    savings_score: number;
    createdAt: string;
    updatedAt: string;
};

export default function CardsPage() {
    const router = useRouter();
    const { user } = useAuthenticator((context) => [context.route]);
    const [allCards, setAllCards] = useState<FetchCard[]>([]);

    useEffect(() => {
        fetchDecks();
    }, [router]);

    const transitionCreateCardPage = () => {
        router.push(`/create-card/${router.query.deck}`);
    };

    const fetchDecks = async () => {
        if (user === undefined) return;
        try {
            await client.graphql({
                query: queries.getDeck,
                variables: { id: router.query.deck as string },
            })
                .then((value) =>
                    value.data.getDeck?.cards
                    && setAllCards(
                        value.data.getDeck.cards.items as FetchCard[],
                    )
                );
        } catch (e) {
            console.log('カードの取得に失敗しました。');
            console.log(e);
        }
    };

    return (
        <main className='size-11/12 mx-auto pt-14'>
            <MLPageHeader>
                <h2>カードリスト</h2>
                <div>
                    <MLButton
                        label='カード追加'
                        onClick={() => transitionCreateCardPage()}
                    />
                </div>
            </MLPageHeader>
            {allCards.map((card, i) => (
                <div key={i} className='p-4 border-2'>
                    <h3>{card.sentence}</h3>
                    <p>{card.meaning}</p>
                </div>
            ))}
        </main>
    );
}
