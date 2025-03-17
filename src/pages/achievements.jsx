import React from 'react'
import { exportModul } from '../export/export'

function Achievements() {
    return (
        <div className='flex items-center justify-center flex-col my-32 gap-7'>
            <div>
                <h1 className='text-center text-4xl leading-14'>Доставка стала проще</h1>
                <p className='text-center max-w-[600px] text-xl leading-7 text-[#72787D]'>Мы позаботимся обо всех ваших различных поставках и их многочисленных специализированных требованиях к разгрузке.</p>
            </div>


            <div className='flex items-center flex-wrap justify-center parent'>
                {
                    exportModul.achievements_Info.map((item) => {
                        return (
                            <div key={item.id} className='flex items-start justify-center max-w-96 gap-2 p-2'>
                                <img src={item.img} alt={item.title} width={50} />
                                <div className='flex items-start start flex-col gap-1.5'>
                                    <b className='text-[#212B31] text-start text-xl leading-6'>{item.title}</b>
                                    <span className='text-[#72787D]'>{item.description}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div className="group relative inline-block text-lg font-medium">
                    <span className="relative z-10 border-b border-[#FFD042] text-[#212B31] text-xl">
                        ... и все остальные материалы,
                    </span>
                    <span className="absolute left-0 bottom-0 w-full h-0 bg-[#FFD042] transition-all duration-400 ease-in-out group-hover:h-1/2" />
                </div>
                <span className='text-[#72787D] text-xl'>которые поступают или покидают вашу площадку</span>
            </div>
        </div>
    )
}

export default Achievements
