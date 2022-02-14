import React from 'react'
export default function HomeCard({img, title, harga, terpotong}) {
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden flex-1 h-full cursor-pointer">
            <div className="w-full bg-gray-200 h-24">
                <img src={`../assets/img/${img}`} alt={title} className="w-full h-full border-0 outline-0 object-cover object-center" />
            </div>
            <h5 className="font-bold text-[12px] mx-2 my-2 text-gray-800">{title}</h5>
            <span className="text-gray-500 text-[9px] mx-2 my-1 block">Harga mulai dari</span>
            <del className="text-gray-500 text-[9px] mx-2 my-1 block">{harga}</del>
            <span className="text-blue-500 text-sm font-bold mx-2 my-1 block">{harga}</span>
        </div>
    )
}