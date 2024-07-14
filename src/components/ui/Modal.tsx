import React, { ReactNode, useEffect } from 'react';

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
                        <button
                            className='bg-slate-900 hover:bg-slate-700 text-white px-8 py-2 mx-auto'
                            onClick={() => props.onOk()}
                        >
                            {props.buttonLabel}
                        </button>
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
