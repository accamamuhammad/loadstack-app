import React from 'react'

import Image from 'next/image'

// Icons 
import TailwindCSSIcon from '../../../public/lists/TailwindCSS.png'
import NextJSIcon from '../../../public/lists/Next.js.png'
import PythonIcon from '../../../public/lists/Python.png'

const stack = () => {
  const testStacks = [
    { Title: "TailwindCSS", description: "A utility-first CSS framework.", Icon: TailwindCSSIcon },
    { Title: "Next.js", description: "A React framework for production.", Icon: NextJSIcon },
    {
      Title: "Python",
      description: "A high-level programming language.",
      Icon: PythonIcon,
    },
  ];

  return (
    <div className='w-full border border-neutral-200 rounded-lg'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
        {testStacks.map((stack, index) => (
          <div key={index} className="flex flex-col items-start justify-center p-4 border border-neutral-200 rounded-lg">
            <div className='p-2 border rounded-lg border-neutral-300'>
                <Image src={stack.Icon} alt={stack.Title} width={30} height={30} />
            </div>
            <h3 className="mt-2 font-bold">{stack.Title}</h3>
            <p className="text-sm text-gray-500">{stack.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default stack
