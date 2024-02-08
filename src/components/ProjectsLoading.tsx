'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'
import {getAllProjects} from '@/serverActions/portfolio-axios'
import {ProjectLoadingProps, ProjectType} from '@/env/types'
import ProjectCard from '@/components/ProjectCard'
import Loading from '../assets/loading.gif'

const ProjectsLoading = ({initialCounter}: ProjectLoadingProps) => {
    const {ref, inView} = useInView()
    const [items, setItems] = useState<ProjectType[]>([])
    const [counter, setCounter] = useState(initialCounter)
    const [isLoad, setIsLoad] = useState<boolean>(true)

    useEffect(() => {
        if (inView) {
            let next_counter = counter + 3

            getAllProjects(counter, next_counter).then(({projects, length}) => {
                setItems([...items, ...projects])
                setIsLoad(next_counter < length)
            })
        
            setCounter(next_counter)
        }
    }, [inView, items])

    return (
        <>
            <div className='items half'>
                {items.map(el => (
                    <ProjectCard data={el} />
                ))}
            </div>
            {isLoad && <Image src={Loading} alt='loading...' ref={ref} />}
        </>
    )
}

export default ProjectsLoading