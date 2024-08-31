import { FetchCard } from '@/pages/card/[deck]';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { useState } from 'react';

export const MLCardListItem = (props: FetchCard) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='border-b-2'>
            <h3
                className='
                    p-4
                    text-xl
                    tracking-wider
                    cursor-pointer
                '
                onClick={() => setIsOpen(!isOpen)}
            >
                {props.sentence}
            </h3>
            <div
                className={`
                ${isOpen ? 'md:flex' : 'hidden'}
                justify-between
                p-3
            `}
            >
                <div className='basis-3/5'>
                    <div className=''>
                        <p className='text-base tracking-widest border-l-4 border-slate-600 pl-3 mb-1'>
                            意味
                        </p>
                        <p className='p-2 mb-2 bg-neutral-300'>
                            {props.meaning}
                        </p>
                    </div>
                    <div className={`${props.etymology === '' && 'hidden'}`}>
                        <p className='text-base tracking-widest border-l-4 border-slate-600 pl-3 mb-1'>
                            語源
                        </p>
                        <p className='p-2 bg-neutral-300'>{props.etymology}</p>
                    </div>
                </div>
                <div>
                    {props.image && (
                        <div>
                            <StorageImage alt='' path={props.image} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
