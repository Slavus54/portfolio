'use client'

import React from 'react'
import {labels} from '../env/env'

const Labels = () => {
    return (
        <div className='items half'>
            {labels.map(el => <h4 className='item pale'>{el}</h4>)}
        </div>
    )
}

export default Labels