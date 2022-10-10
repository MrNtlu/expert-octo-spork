import React from 'react'
import { FindSlug } from '../../constants/Projects'
import ErrorPage from 'next/error'

const useProjectSlug = () => {
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

export default useProjectSlug
