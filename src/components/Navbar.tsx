'use client'

import Link from 'next/link'
import React from 'react'
import {routes} from '../env/env'

const Navbar = () => {
    return (
        <div className='navbar'>
            {routes.map((el, idx) => <Link href={el.url} key={idx}>{el.title}</Link>)}
        </div>
    )
}

export default Navbar
