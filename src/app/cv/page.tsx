import Layout from '@/components/Layout'
import Education from '@/components/Education'
import Employment from '@/components/Employment'
import Skills from '@/components/Skills'

const Page = async () => {

    return (
        <Layout>
            <Education />
            <Employment />
            <Skills />
        </Layout>
    )
}

export default Page