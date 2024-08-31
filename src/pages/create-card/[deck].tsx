import { MLButton } from '@/components/ui/MLButton';
import * as mutations from '@/graphql/mutations';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { generateClient } from 'aws-amplify/api';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    sentence: string;
    meaning: string;
    etymology: string;
};
const client = generateClient();

export default function CreateCardPage() {
    const { user } = useAuthenticator((context) => [context.route]);
    const router = useRouter();
    const [imagePath, setImagePath] = useState('');
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cse.google.com/cse.js?cx=c34c3fe642a404b18';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const onSubmit = (data: any, event: any) => {
        const buttonName = event.nativeEvent.submitter.name;
        console.log(buttonName);
        createCard(data);
    };

    const createCard = async (data: FormData) => {
        if (user === undefined) return;
        if (!router?.query?.deck) return;
        try {
            const newCard = {
                user_id: user.userId,
                retention_state: false,
                savings_score: 1,
                deckCardsId: router.query.deck as string,
                image: imagePath,
                ...data,
            };
            await client.graphql({
                query: mutations.createCard,
                variables: { input: newCard },
            });
        } catch (e) {
            console.log('デッキの取得に失敗しました。');
            console.log(e);
        }
    };

    const processFile = ({ file, key }: any) => {
        return {
            file,
            key: self.crypto.randomUUID(),
            metadata: {
                id: key,
            },
        };
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='size-11/12 mx-auto pt-14'
        >
            <div className='flex flex-col mb-4'>
                <label htmlFor='sentence'>センテンス</label>
                <input
                    id='sentence'
                    {...register('sentence', {
                        required: 'センテンスを入力してください',
                    })}
                    className='border-2 p-2 font-mono'
                    type='text'
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='meaning'>日本語の意味</label>
                <textarea
                    rows={5}
                    className='border-2 p-2 font-mono'
                    id='meaning'
                    {...register('meaning', {
                        required: '意味を入力してください',
                    })}
                >
                </textarea>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='image'>画像</label>
                <div className='gcse-search'></div>
                <StorageManager
                    acceptedFileTypes={[
                        '.bmp',
                        '.png',
                        '.jpeg',
                        '.jpg',
                        'image/png',
                    ]}
                    path={`public/images/users/${user?.userId}/`}
                    maxFileCount={1}
                    maxFileSize={100000}
                    processFile={processFile}
                    onUploadError={(error, { key }) => {
                        console.log('アップロードエラー', error);
                    }}
                    onUploadSuccess={({ key }) => {
                        if (!key) return;
                        setImagePath(key);
                    }}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='etymology'>語源</label>
                <textarea
                    rows={5}
                    className='border-2 p-2 font-mono'
                    id='etymology'
                    {...register('etymology')}
                >
                </textarea>
            </div>
            <div className='flex justify-center'>
                <MLButton
                    label='続けて作成'
                    type='submit'
                    name='continuing-create'
                    onClick={() => undefined}
                />
                <MLButton
                    label='作成'
                    type='submit'
                    name='create'
                    onClick={() => undefined}
                />
            </div>
        </form>
    );
}
