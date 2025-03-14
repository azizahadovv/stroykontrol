import React from 'react'
import Navbar from '../navbar/navbar'
import { BUTTON } from '../utils'
import { PICTURECITY, TRUCKS } from '../assets'

function Header() {
    return (
        <div>
            <Navbar />

            <header className='flex flex-col items-center justify-center gap-8'>
                <h1 className='text-[#212B31] font-thin text-7xl max-w-6xl text-center max-lg:text-4xl'>Умная доставка материалов для сложных строительных площадок</h1>

                <div className='flex gap-4'>
                    <BUTTON name='Заказать демо' />
                    <BUTTON name='Подробнее' active={false} />
                </div>

                <img src={PICTURECITY} alt="PICTURECITY" />
                <img src={TRUCKS} alt="TRUCKS"/>
            </header>

        </div>
    )
}

export default Header
