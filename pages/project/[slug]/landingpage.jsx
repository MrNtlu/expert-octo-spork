import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../../components/landingpage/Header'
import Description from '../../../components/landingpage/Description'
import ErrorPage from 'next/error'
import { FindSlug } from '../../../constants/LandingPages'
import Hero from '../../../components/landingpage/Hero'

const useSlugLandingPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const title = (slug + "").charAt(0).toUpperCase() + (slug + "").slice(1)

    let project = FindSlug(slug)

    if (router.isReady) {
        if (project != undefined) {
            return (
                <div className='text-white overflow-hidden w-[100%]'>
                    <Head>
                        <title>{title} | MrNtlu</title>

                        <meta name="title" content="Kanma - Personal Finance" />
                        <meta name="description" content="Track and manage your money." />

                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="http://kanma.herokuapp.com/" />
                        <meta property="og:title" content="Kanma - Personal Finance" />
                        <meta property="og:description" content="Track and manage your money." />

                        <link rel="icon" href={"/favicon.ico"} />
                    </Head>

                    <Header slug={project.slug}/>

                    <Hero
                        slug={project.slug}
                        title={project.title}
                        sTitle={project.sTitle}
                        subTitle={project.subTitle}
                        google={project.playstore}
                        ios={project.appstore}
                    />

                    <Description description={project.description} features={project.features} />
                </div>
            )
        } else {
            return <ErrorPage statusCode={404} />
        }
    } else {
        return <div></div> //TODO: Implement loading
    }
}

export default useSlugLandingPage