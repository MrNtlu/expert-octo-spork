export const PortfolioProjects = [
    {
        slug: "kanma",
        name: "Kanma - Personal Finance Manager",
        description: `Personal Finance Manager. It helps users to track their investments, transactions and subscriptions and it's totally open source.
        
        Users can track all their investments, subscriptions and expense/incomes in one app and they can get detailed statistics.`,
        tags: ["Go", "MongoDB", "Flutter", "Redis", "Open Api", "Scraper", "React", "TailwindCSS"],
        github: "https://github.com/MrNtlu/Asset-Manager",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.kantan",
        appstore: "https://apps.apple.com/tr/app/kanma-personal-finance/id1629419797",
        isLandingPageActive: true,
    },
    {
        slug: "mai_2",
        name: "MyAnimeInfo 2 – MyAnimeList Anime & Manga Browser",
        description: `App uses Jikan API, SQLite, Room, MVVM with LiveData, Coroutines, Navigation Components and Retrofit.

        MAL Anime & Manga Browser APP that you can search and find all the anime & manga and user infos.`,
        tags: ["Android", "Kotlin", "SQLite", "Room", "MVVM", "LiveData", "Coroutines", "Retrofit"],
        github: "https://github.com/MrNtlu/MyAnimeInfo2",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.myanimeinfo2",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "sugee",
        name: "Sugee Kansai",
        description: `In a Start-up Company located in Osaka/Japan,

        Working on Android & iOS Application with Firebase, Google Translate API, Google Maps API and some other libraries and API's.`,
        tags: ["Android", "iOS", "Firebase", "FCM", "Cloud Functions", "RxJava", "Kotlin", "Java", "Retrofit"],
        github: null,
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.solnetwork",
        appstore: "https://apps.apple.com/us/app/sugee-kansai/id1512411346",
        isLandingPageActive: false,
    },
    {
        slug: "subs",
        name: "Subscription Manager",
        description: `App w/Kotlin, MVVM, Coroutines, Navigation Components, Livedata, Retrofit and Room.

        App allows you to track all your subscriptions, set alarms and convert to other currencies.`,
        tags: ["Android", "Kotlin", "MVVM", "Coroutines", "LiveData", "Retrofit", "Room"],
        github: "https://github.com/MrNtlu/MySubscriptionManager",
        playstore: "https://github.com/MrNtlu/MySubscriptionManager",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "flt",
        name: "FriendsLeagueTable - Create Your Own League",
        description: `App uses Dagger 2, RxJava, SQLite, Room, MVVM with LiveData, Unit Testing, ButterKnife, Leak Canary and Glide.

        App allows you to create your own league to track your matches that you played with your friends. `,
        tags: ["Android", "Java", "MVVM", "RxJava", "LiveData", "SQLite", "Dagger 2", "Room"],
        github: "https://github.com/MrNtlu/FriendsLeagueTable",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.friendsleaguetable",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "passvault",
        name: "PassVault",
        description: `This app allows you to save all the mails, accounts, game accounts, bank accounts etc. to your phone without using database. 
        
        All accounts will be stored in local devices memory.`,
        tags: ["Android", "Java", "Parse", "RealmDB", "MVVM" ],
        github: "https://github.com/MrNtlu/PassVault",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.PassVault",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "mai",
        name: "MyAnimeInfo - MyAnimeList Anime Browser APP",
        description: `MAL Anime Browser APP that you can search and find all the anime and user infos.`,
        tags: ["Android", "Java", "MVVM"],
        github: "https://github.com/MrNtlu/MyAnimeInfo",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.myanimeinfo",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "wallmedia",
        name: "WallMedia APP",
        description: `Wallpaper APP that uses API and Firebase to retrive and save informations and image links.`,
        tags: ["Android", "Java", "Firebase"],
        github: "https://github.com/MrNtlu/WallMedia-APP",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.socialmediaapp",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "todo",
        name: "WhatTODO",
        description: `ToDo APP with RealmDB and Widget`,
        tags: ["Android", "Java", "RealmDB"],
        github: "https://github.com/MrNtlu/WhatTODO",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.whattodo",
        appstore: null,
        isLandingPageActive: false,
    },
    {
        slug: "mad_planets",
        name: "Mad Planets 2D - Unity C#",
        description: `It's a Endless 2D game where you have to dodge incoming planets by using touch screen.`,
        tags: ["Unity", "2D", "C#"],
        github: "https://github.com/MrNtlu/MadPlanetsUnity2D",
        playstore: "https://play.google.com/store/apps/details?id=com.MadPlanets",
        appstore: null,
        isLandingPageActive: false,
    },
]

export const FindSlug = (slug) => {
    return PortfolioProjects.find(project => project.slug === slug);
}