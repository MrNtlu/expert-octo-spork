import { motion } from 'framer-motion'
import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import DownloadAds from './DownloadAds';
import Image from 'next/image'

function Hero({ slug, title, sTitle, subTitle, google, ios }) {
    const [elementIsVisible, setElementIsVisible] = useState(false)
    const leftImage = {
        true: {
            marginLeft: "10rem",
        },
        false: {
            marginLeft: "0rem",
        },
    };
    const rightImage = {
        true: {
            marginRight: "10rem",
        },
        false: {
            marginRight: "0rem",
        },
    }

    return (
        <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)} offset={{ bottom: 300 }} partialVisibility={true}>
            <div className="wrapper flex flex-col items-center relative z-[3]" style={{ backgroundColor: "#2E0BA0" }}>
                <div className="headings flex flex-col items-center justify-center text-[3rem] text-center">
                    <span>{title}</span>{" "}
                    <span><b>{sTitle}</b></span>
                    <span className="text-[20px] text-gray-400">
                        {subTitle}
                    </span>
                    <div className='mt-[2rem] mb-[1rem]'>
                        <DownloadAds ios={ios} google={google} />
                    </div>
                </div>
                <div className="flex flex-col items-center images relative w-[100%] mb-[-7rem]">
                    <motion.div
                        variants={leftImage}
                        animate={`${elementIsVisible}`}
                        transition={{
                            duration: 1,
                            type: "ease-out"
                        }}
                        className='absolute h-[31rem] ml-[10rem]'>
                        <Image
                            src={require(`../../public/static/landingpage/screenshots/${slug}_2.png`)}
                            alt=""
                            height="496px"
                            width="262px"
                        />
                    </motion.div>
                    <motion.div
                        variants={rightImage}
                        animate={`${elementIsVisible}`}
                        transition={{
                            type: "ease-out",
                            duration: 1,
                        }}
                        src={require(`../../public/static/landingpage/screenshots/${slug}_3.png`)}
                        alt=""
                        className='absolute h-[31rem] mr-[10rem]'>
                        <Image
                            src={require(`../../public/static/landingpage/screenshots/${slug}_3.png`)}
                            alt=""
                            height="496px"
                            width="262px"
                        />
                    </motion.div>
                    <Image
                        className='absolute'
                        src={require(`../../public/static/landingpage/screenshots/${slug}_1.png`)}
                        alt=""
                        height="496px"
                        width="262px"
                    />
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default Hero