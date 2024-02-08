'use client'

import React, {useState} from 'react'
import {employment_cards} from '@/env/env'
import {EmploymentCardType} from '@/env/types'

const Employment = () => {
    const [card, setCard] = useState<EmploymentCardType | null>(null)

    return (
        <>
            <h1>Трудоустройство</h1>
            <div className='items half'>
                {employment_cards.map(el => 
                    <div onClick={() => setCard(el)} className='item panel'>
                        <h3>{el.title}</h3>
                        <h5 className='pale'>{el.start} - {el.end}</h5>
                    </div>    
                )}
            </div>

            {card !== null &&
                <div className='item' onClick={() => setCard(null)}>
                    <h2>{card.title}</h2>
                   
                    <div className='items'>
                        <h4 className='pale'>Заказчик: {card.category}</h4>
                        <h4 className='pale'>Позиция: {card.position}</h4>
                    </div>

                    <h3>Технологии</h3>
                    <div className='items'>
                        {card.technologies.map(el => <p>{el}</p>)}
                    </div>

                    <h3>Что делал?</h3>
                    <p>{card.text}</p>
                </div>
            }
        </>
    )
}

export default Employment