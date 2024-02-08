import {getAllProjects} from '@/serverActions/portfolio-axios'
import ProjectCard from '@/components/ProjectCard'
import Layout from '@/components/Layout'
import ProjectsLoading from '@/components/ProjectsLoading'

const Page = async () => {
    const {projects} = await getAllProjects(0, 9)

    return (
        <Layout>
            <div className='items half'>
                {projects.map((el: any) => (
                    <ProjectCard data={el} />
                ))}
            </div>
            <ProjectsLoading initialCounter={9} />
        </Layout>
    )
}

export default Page