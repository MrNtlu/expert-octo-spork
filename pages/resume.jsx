import React from 'react'
import Head from 'next/head';

const resume = () => {

    return (
        <>
            <Head>
                <title>Burak Fidan | Resume</title>
                <meta
                    name='description'
                    content='Burak Fidan | Resume'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <iframe className='h-screen w-screen' src='assets/resume.pdf#zoom=FitH' />
        </>
    )
}

export default resume