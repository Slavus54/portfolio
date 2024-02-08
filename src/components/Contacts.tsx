'use client'

import React from 'react'
import {contacts} from '../env/env'

const Contacts = () => {
   
    const onView = (url: string) => {
        window.open(url)
    }

    return (
        <div className='items small'>
            {contacts.map(el => <img onClick={() => onView(el.url)} src={el.icon} className='icon' alt='icon' />)}
        </div>
    )
}

export default Contacts