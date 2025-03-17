import React from 'react'
import { ITEM1, ITEM2, ITEM3, ITEM4, ITEM5, ITEM6 } from '../assets'

function Advertising() {
    return (
        <div className='flex items-center flex-col justify-center min-h-32 py-10 my-52 border-b border-t border-[#EEF2F3]'>
            <div class="wrapper">
                <div class="itemLeft item item1"><img src={ITEM1} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item2"><img src={ITEM2} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item3"><img src={ITEM3} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item4"><img src={ITEM4} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item5"><img src={ITEM5} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item6"><img src={ITEM6} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item7"><img src={ITEM2} alt="This is scroll brand logo" /></div>
                <div class="itemLeft item item8"><img src={ITEM4} alt="This is scroll brand logo" /></div>
            </div>
            <div class="wrapper">
                <div class="itemRight item item1"><img src={ITEM6} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item2"><img src={ITEM5} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item3"><img src={ITEM4} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item4"><img src={ITEM3} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item5"><img src={ITEM2} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item6"><img src={ITEM1} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item7"><img src={ITEM4} alt="This is scroll brand logo" /></div>
                <div class="itemRight item item8"><img src={ITEM6} alt="This is scroll brand logo" /></div>
            </div>
        </div>
    )
}

export default Advertising
