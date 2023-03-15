import React, { useState } from 'react'

function Search({ setSearch }) {

    let handlechange = (e) => {
        const { name, value } = e.target
        setSearch({ [name]: value })
    }

    return (
        <>
            <div className='w-[50%]'>

                <input onChange={handlechange} name="search" className=' bg-slate-700 rounded-full p-2 w-full mb-1 ' placeholder='Search..' />
            </div>

        </>
    )
}

export default Search
