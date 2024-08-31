import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const MLPageHeader = (props: Props) => {
    return (
        <div className='flex justify-between items-center border-b-2 mb-4 h-14'>
            {props.children}
        </div>
    );
};
