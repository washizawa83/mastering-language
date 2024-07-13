import Link from 'next/link';

type Props = {
    name: string;
    cardCount: number;
    perfect: number;
    good: number;
    Fight: number;
};

export const DeckListItem = (props: Props) => {
    return (
        <Link href=''>
            <div className='flex justify-between items-center p-4 border-2 mb-4'>
                <div>
                    <h3>{props.name}</h3>
                    <ul className='flex h-14 items-center'>
                        <li className='mr-4'>🔴：{props.Fight}</li>
                        <li className='mr-4'>🟠：{props.good}</li>
                        <li className='mr-4'>🟢：{props.perfect}</li>
                    </ul>
                </div>
                <div>
                    <h3>{props.cardCount}</h3>
                </div>
            </div>
        </Link>
    );
};
