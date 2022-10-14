export const LandingPages = [
    {
        slug: "kanma",
        name: "Kanma - Personal Finance Manager",
        title: "Kanma",
        sTitle: "Personal Finance",
        subTitle: "Track and manage your money.",
        description: "Manage your money and track your investments and subscriptions",
        playstore: "https://play.google.com/store/apps/details?id=com.mrntlu.kantan",
        appstore: "https://apps.apple.com/tr/app/kanma-personal-finance/id1629419797",
        features: [
            {
                icon: "investment",
                title: "Investments",
                description: "Track all your investments in one app."
            },
            {
                icon: "subscription",
                title: "Subscriptions",
                description: "Never miss subscription's payment time."
            },
            {
                icon: "transactions",
                title: "Transactions",
                description: "Track your expenses and manage your money wisely."
            },
            {
                icon: "statistics",
                title: "Statistics",
                description: "Get detailed statistics and manage your money."
            },
        ]
    },
]

export const FindSlug = (slug) => {
    return LandingPages.find(project => project.slug === slug);
}