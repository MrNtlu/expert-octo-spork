export const PortfolioProjects = [
    {
        slug: "kanma",
        name: "Kanma - Personal Finance Manager",
        description: `
        Personal Finance Manager. It helps users to track their investments, transactions and subscriptions and it's totally open source.
        Users can track all their investments, subscriptions and expense/incomes in one app and they can get detailed statistics.
        `,
        tags: ["flutter", "mongodb"],
        github: "",
    },
    {
        slug: "sugee",
        name: "Sugee Kansai",
        description: `
        Personal Finance Manager. It helps users to track their investments, transactions and subscriptions and it's totally open source.
        Users can track all their investments, subscriptions and expense/incomes in one app and they can get detailed statistics.
        `,
        tags: ["flutter", "mongodb"],
        github: "",
    },
]

export const FindSlug = (slug) => {
    return PortfolioProjects.find(project => project.slug === slug);
}