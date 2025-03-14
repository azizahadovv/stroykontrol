import React from 'react'

function Button({ functions, active = true, name = "button", py = 'py-2', px = 'px-6' }) {
    return (
        <button onClick={functions} className={`${active ? 'bg-[#212B31] text-white' : 'bg-white text-[#212B31]'} ${px} ${py}  rounded-lg shadow-[#00000029] border border-[#DADEDF]`}>
            {name}
        </button>
    )
}

export default Button
