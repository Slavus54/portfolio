'use client'

import React, {useState} from 'react'
import Image from 'next/image'
//@ts-ignore
import Centum from 'centum.js'
import {edu_cards} from '@/env/env'
import {EducationCardType} from '@/env/types'

const Education = () => {
    const [card, setCard] = useState<EducationCardType | null>(null)
    const centum = new Centum()

    return (
        <>
            <h1>Образование</h1>
            <div className='items half'>
                {edu_cards.map(el => 
                    <div onClick={() => setCard(el)} className='item panel'>
                        <h3>{centum.shorter(el.title, 2)}</h3>
                        <h5 className='pale'>{el.category}</h5>
                    </div>    
                )}
            </div>

            {card !== null &&
                <div className='item' onClick={() => setCard(null)}>
                    <h2>{card.title}</h2>

                    <Image src={card.link} alt="education photo" width='300' height="150" />

                    <div className='items'>
                        <h4 className='pale'>Тип: {card.category}</h4>
                        <h4 className='pale'>Длительность: {card.time}</h4>
                    </div>
                </div>
            }
        </>
    )
}

export default Education