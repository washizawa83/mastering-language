import React, { ReactNode, useEffect } from 'react';
import { MLButton } from './MLButton';

export type ModalProps = {
    title: string;
    buttonLabel: string;
    children: ReactNode;
    open: boolean;
    onCancel: () => void;
    onOk: () => void;
};

export const MessageDialog = (props: ModalProps) => {
    return props.open
        ? (
            <>
                <div className='bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-auto p-8 flex flex-col items-start absolute z-20'>
                    <h1 className='text-xl font-bold mb-5'>{props.title}</h1>
                    <div className='w-full'>{props.children}</div>
                    <div className='flex mt-auto w-full'>
                        <MLButton
                            label={props.buttonLabel}
                            onClick={() => props.onOk()}
                        />
                    </div>
                </div>
                <div
                    className='fixed bg-black bg-opacity-50 w-full h-full z-10'
                    onClick={() => props.onCancel()}
                >
                </div>
            </>
        )
        : <></>;
};
