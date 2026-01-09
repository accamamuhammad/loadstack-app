import React from 'react'
import Image from 'next/image'


// Component
import Stack from "../ux/stack";
// import Filter from "../ux/filter";  


const homepage = () => {
  return (
    <section className="w-full gap-5 px-6 flex flex-col items-center justify-center">
      {/* Filter Component */}
      {/* <Filter /> */}

      {/* Lists */}
      <Stack />
    </section>
  );
};

export default homepage
