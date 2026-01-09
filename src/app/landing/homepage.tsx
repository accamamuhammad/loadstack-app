import React from 'react'
import Image from 'next/image'

// Component
import Filter from "../ux/filter";  

// Icons & Images
import HeroImage from '../../../public/images/home-Illustration.png';

const homepage = () => {
  return (
    <section className='w-full gap-5 px-6 flex flex-col items-center justify-center'>
      {/* Filter Component */}
      <Filter />  
    </section>
  )
}

export default homepage
