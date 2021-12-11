import React from 'react'

export default function Pagination() {
    return (
        <div className='relative w-64 '>
            <div className='p-4 text-lg border border-black cursor-pointer hover:bg-gray-200'>Dashboard</div>
            <div className='p-4 text-lg border border-t-0 border-r-0 border-black cursor-pointer hover:bg-gray-200'>Profile</div>
            
            <button className='absolute bottom-0 w-64 p-4 text-xl text-red-600 hover:bg-red-200 hover:text-black '>Log Out</button>
        </div>
    )
}
