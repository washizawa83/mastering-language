import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    allowAuthenticate: boolean;
};

export default function BasePage({ children, allowAuthenticate }: Props) {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    const renderChildComponent = (): ReactNode => {
        if (allowAuthenticate === false) return children;
        if (authStatus === 'authenticated') return children;
        return <Authenticator />;
    };
    return (
        <main>
            {renderChildComponent()}
        </main>
    );
}
