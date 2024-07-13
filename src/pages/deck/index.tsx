import BasePage from '@/components/page-utils/BasePage';
import { DeckListItem } from '@/components/ui/DeckListItem';

const mockDecks = [
    {
        name: '英語',
        cardCount: 200,
        perfect: 50,
        good: 120,
        Fight: 30,
    },
    {
        name: 'フランス語',
        cardCount: 80,
        perfect: 20,
        good: 40,
        Fight: 20,
    },
];

export default function DeckPage() {
    return (
        <BasePage allowAuthenticate={true}>
            <main className='size-11/12 mx-auto pt-14'>
                <div className='flex justify-between border-b-2 mb-4'>
                    <h2>デッキリスト</h2>
                    <button>デッキ追加</button>
                </div>
                {mockDecks.map((deck, i) => (
                    <DeckListItem
                        key={i}
                        name={deck.name}
                        cardCount={deck.cardCount}
                        perfect={deck.perfect}
                        good={deck.good}
                        Fight={deck.Fight}
                    />
                ))}
            </main>
        </BasePage>
    );
}
