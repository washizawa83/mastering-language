'use client'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useForm } from 'react-hook-form'
import * as mutations from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { useRouter } from 'next/router';

type FormData = {
    sentence: string,
    meaning: string,
    image: string,
    etymology: string
}
const client = generateClient();

export default function CreateCardPage() {
    const { user } = useAuthenticator((context) => [context.route]);
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FormData, event: any) => {
        const buttonName = event.nativeEvent.submitter.name;
        console.log(buttonName)
        createCard(data)
    };

    const createCard = async (data: FormData) => {
        if(user === undefined) return
        if (!router?.query?.deck) return
        try {
            const newCard = {
                user_id: user.userId,
                retention_state: false,
                savings_score: 1,
                deckCardsId: router.query.deck as string,
                ...data
            }
            await client.graphql({
                query: mutations.createCard,
                variables: { input: newCard }
            });
        } catch (e) {
            console.log('デッキの取得に失敗しました。')
            console.log(e)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='size-11/12 mx-auto pt-14'>
            <div className='flex flex-col mb-4'>
                <label htmlFor='sentence'>センテンス</label>
                <input id='sentence' {...register('sentence', {required: 'センテンスを入力してください'})} className='border-2 p-2 font-mono' type='text' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='meaning'>日本語の意味</label>
                <textarea className='border-2' id='meaning' {...register('meaning', {required: '意味を入力してください'})}></textarea>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='image'>画像</label>
                <input
                    id='image'
                    {...register('image')}
                    className='border-2'
                    type='text'
                    placeholder='画像検索'
                />
                <input type='file' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor='etymology'>語源</label>
                <textarea className='border-2' id='etymology' {...register('etymology')}></textarea>
            </div>
            <div className='flex justify-center'>
                <button className='border-2 p-2 mx-2' type='submit' name='continuing-create'>
                    続けて作成
                </button>
                <button className='border-2 p-2 mx-2' type='submit' name='create'>
                    作成
                </button>
            </div>
        </form>
    );
}
