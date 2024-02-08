'use client'

import React from 'react'
import {useRouter} from 'next/navigation'
import {ProjectTypeProps} from '@/env/types'

const ProjectCard = ({data} : ProjectTypeProps) => {

    const router = useRouter()

    const onView = () => {
        router.push(`/projects/${data.id}`)
    }

    return (
        <div onClick={onView} className='item card'>
            <h3>{data.title}</h3>
            <small className='pale'>{data.category}</small>
        </div>
    )
}

export default ProjectCard