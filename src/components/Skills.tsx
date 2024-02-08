'use client'

import {skills} from '@/env/env'

const Skills = () => {

    return (
        <>
            <h1>Навыки и Качества</h1>
            <div className='items half'>
                {skills.map(el => 
                    <div className='item panel'>
                        <h3>{el.title}</h3>
                        <div className='items'>
                            <h5 className='pale'>Тип: {el.category}</h5>
                            <h5 className='pale'>Уровень: {el.level}</h5>
                        </div>
                    </div>    
                )}
            </div>      
        </>
    )
}

export default Skills