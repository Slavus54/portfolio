
import Image from 'next/image'
import Layout from '../components/Layout'
import Labels from '../components/Labels'
import Contacts from '../components/Contacts'
import photo from '../assets/profile_photo.jpg'
import './globals.css'

export default function Home() {
  return (
      <Layout>
        <Image src={photo} className='photo_item' alt='profile photo' />
        <Labels />
        <Contacts />
      </Layout>
  )
}
