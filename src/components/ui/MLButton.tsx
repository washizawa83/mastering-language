type Props = {
    label: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    onClick: () => void;
};

export const MLButton = (props: Props) => {
    return (
        <button
            name={props.name}
            type={props.type ? props.type : 'button'}
            className='bg-slate-700 hover:bg-slate-600 text-gray-200 rounded p-2 mx-auto min-w-24'
            onClick={() => props.onClick()}
        >
            {props.label}
        </button>
    );
};
