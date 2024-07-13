import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';

export default function Header() {
    const { route, signOut } = useAuthenticator((context) => [context.route]);

    return (
        <header className='w-full bg-slate-600 text-slate-200'>
            <div className='flex flex-wrap justify-between items-center size-11/12 mx-auto min-h-10 h-full'>
                <div>
                    <h1 className='text-2xl'>Mastering Language</h1>
                </div>
                <nav>
                    <ul className='flex'>
                        <li className='p-1.5'>
                            <Link href='/'>ダッシュボード</Link>
                        </li>
                        <li className='p-1.5'>
                            <Link href='/deck'>デッキ</Link>
                        </li>
                        {route === 'authenticated'
                            ? (
                                <li className='p-1.5' onClick={signOut}>
                                    <Link href=''>ログアウト</Link>
                                </li>
                            )
                            : (
                                <li className='p-1.5'>
                                    <Link href=''>ログイン</Link>
                                </li>
                            )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
