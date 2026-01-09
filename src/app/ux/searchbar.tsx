import React from 'react'

// Icons 
import { IoIosSearch } from "react-icons/io";

const searchbar = () => {
  return (
    // Search Bar
    <div className='w-56 h-11 pb-0.5 bg-neutral-100 border border-neutral-200 rounded-lg flex flex-row  items-center justify-start relative'>
        <input placeholder='Search' type="text" className='w-full h-full absolute pl-10'/>
        <div className='pl-2.5'><IoIosSearch color='grey' size={22}/></div>
    </div>
  )
}

export default searchbar
