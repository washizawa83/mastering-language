import BasePage from '@/components/page-utils/BasePage';
import { MLButton } from '@/components/ui/MLButton';
import { MLCardListItem } from '@/components/ui/MLCardListItem';
import { MLPageHeader } from '@/components/ui/MLPageHeader';
import * as queries from '@/graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const client = generateClient();

export type FetchCard = {
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
        <BasePage allowAuthenticate={true}>
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
                    <MLCardListItem
                        key={i}
                        {...card}
                    />
                ))}
            </main>
        </BasePage>
    );
}
