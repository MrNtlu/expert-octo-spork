import React from 'react'
import Image from 'next/image'

function DownloadAds({google, ios}) {
    return (
        <div className="download">
            <div className="download_images flex">
                <a className={`mr-[1.6rem]`} href={ios + ""} ><Image src={require("../../public/static/assets/app_store.png")} alt="" height={42} width={150} /></a>
                <a href={google + ""} ><Image src={require("../../public/static/assets/google_play.png")} alt="" height={42} width={151} /></a>
            </div>
        </div>
    )
}

export default DownloadAds