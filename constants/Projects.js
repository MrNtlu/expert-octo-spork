export const Projects = [
    {
        slug: "kanma",
        name: "Kanma - Personal Finance Manager",
    },
    {
        slug: "sugee",
        name: "Sugee Kansai"
    }
]

export const FindSlug = (slug) => {
    return Projects.find(project => project.slug === slug);
}