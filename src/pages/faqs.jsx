import { exportModul } from '../export/export'

function Faqs() {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='text-center text-4xl text-[#212B31]'>Что такое СтройКонтроль?</h1>
                <p className='text-center max-w-2xl text-[#72787D]'>СтройКонтроль - это интеллектуальная система управления доставкой, предоставляющая информацию и контроль материалов на сложных строительных площадках в режиме реального времени.</p>
            </div>
            {
                exportModul.faq_Info.map((item) => <div className={`flex items-center justify-evenly flex-wrap my-10 ${item.id !==2 && 'flex-row-reverse'} `}>
                    <div key={item.id} className='max-w-[600px] flex flex-col items-start gap-3 '>
                        <h2 className='text-3xl text-[#212B31] leading-7'>{item.title}</h2>
                        <p className='text-[#72787D] text-xl'>{item.description}</p>
                    </div>
                    <img src={item.img} alt={item.alt} />
                </div>)
            }
        </div>
    )
}

export default Faqs
