'use client'

import {useRouter} from 'next/navigation'
import {getProject} from '@/serverActions/portfolio-axios'
import {CollectionPropsType} from '@/env/types'
import '../../globals.css'

const Page = async ({params}: CollectionPropsType) => {
    const router = useRouter()
    const project = await getProject(params.id)

    const onView = () => {
        window.open(project.url)
    }

    return (    
        <div className='main'>
            <h1>Проект {project.title}</h1>
            <div className='items small'>
                <h4 className='pale'>Год создания: <b>{project.year}</b></h4>
                <h4 className='pale'>Тип: {project.category}</h4>
            </div>

            <h2>Описание</h2>
            <p>{project.description}</p>

            <button onClick={onView} className='light_btn'>Подробнее</button>

            <h2>Технологии</h2>
            <div className='items small'>
                {project.technologies.map((el: string) => <p className='item label'>{el}</p>)}
            </div>            
            
            <button onClick={() => router.push('/projects')}>Назад</button>
        </div>
    )
}

export default Page