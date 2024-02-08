'use client'

import React from 'react'
import Navbar from '@/components/Navbar'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div className='main'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
