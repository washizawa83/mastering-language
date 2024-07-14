export default function CreateCardPage() {
    return (
        <form action='' className='size-11/12 mx-auto pt-14'>
            <div className='flex flex-col mb-4'>
                <label htmlFor=''>センテンス</label>
                <input className='border-2 p-2 font-mono' type='text' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor=''>日本語の意味</label>
                <textarea className='border-2' name=''></textarea>
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor=''>画像</label>
                <input
                    className='border-2'
                    type='text'
                    placeholder='画像検索'
                />
                <input type='file' />
            </div>
            <div className='flex flex-col mb-4'>
                <label htmlFor=''>語源</label>
                <textarea className='border-2' name='' id=''></textarea>
            </div>
            <div className='flex justify-center'>
                <button className='border-2 p-2 mx-2' type='submit'>
                    続けて作成
                </button>
                <button className='border-2 p-2 mx-2' type='submit'>
                    作成
                </button>
            </div>
        </form>
    );
}
