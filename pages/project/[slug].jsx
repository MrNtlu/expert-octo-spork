import React from 'react'
import { useRouter } from 'next/router'
import { FindSlug } from '../../constants/Projects'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import ErrorPage from 'next/error'

const projectSlug = () => {
    const router = useRouter()
    const { slug } = router.query
    
    let project = FindSlug(slug)

    if (project != undefined) {
        return (
            <div>
                {project.name}
            </div>
        )
    } else {
        return <ErrorPage statusCode={404} />
    }
}

export default projectSlug
