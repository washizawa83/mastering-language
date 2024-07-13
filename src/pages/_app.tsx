import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Header from '@/components/page-utils/Header';
Amplify.configure(awsExports);

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Authenticator.Provider>
                <Header />
                <Component {...pageProps} />
            </Authenticator.Provider>
        </>
    );
}
