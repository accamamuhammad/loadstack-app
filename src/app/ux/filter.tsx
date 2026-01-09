'use client'

import React, { useState } from 'react'

// Icons
import { LuWrench } from "react-icons/lu";
import { GoStack } from "react-icons/go";

const Filter = () => {
  // State to track which filter is active
  const [active, setActive] = useState('tools'); // default: 'tools'

  return (
    <div className="w-full gap-2 px-2 h-12 flex flex-row items-center justify-between bg-neutral-100 rounded-lg">
      {/* Tools button */}
      <div
        onClick={() => setActive('tools')}
        className={`w-1/2 gap-2 flex flex-row items-center justify-center px-4 h-[80%] rounded-lg font-medium cursor-pointer ${
          active === 'tools' ? 'bg-indigo-500 text-white' : 'bg-white text-black'
        }`}
      >
        <LuWrench size={16}/> <span>Tools</span>
      </div>

      {/* Stacks button */}
      <div
        onClick={() => setActive('stacks')}
        className={`w-1/2 gap-2 flex flex-row items-center justify-center px-4 h-[80%] rounded-lg font-medium cursor-pointer ${
          active === 'stacks' ? 'bg-indigo-500 text-white' : 'bg-white text-black'
        }`}
      >
        <GoStack size={16}/> <span>Stacks</span>
      </div>
    </div>
  );
}

export default Filter;
