'use client'

import React, { useState } from "react";
// Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Define types
type Category = "Purpose" | "Framework" | "Workflow" | "Level";

const filterOptions: Record<Category, string[]> = {
  Purpose: ["Productivity", "UI/Design", "Testing", "Docs"],
  Framework: ["Next.js", "React", "Node.js", "Vue"],
  Workflow: ["Writing", "Quality", "Debugging", "Deployment"],
  Level: ["Beginner", "Intermediate", "Advanced"],
};

const Filter: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<Category | null>(null);
  const [selected, setSelected] = useState<Record<Category, string>>({
    Purpose: "",
    Framework: "",
    Workflow: "",
    Level: "",
  });

  const toggleDropdown = (name: Category) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelect = (category: Category, option: string) => {
    setSelected({ ...selected, [category]: option });
    setOpenDropdown(null);
  };

  return (
    <div className="px-1.5 py-2 gap-5 w-full flex flex-row items-center justify-between rounded-lg bg-neutral-100 shadow">
      {Object.keys(filterOptions).map((category) => {
        const cat = category as Category;
        return (
          <div key={cat} className="relative w-1/4">
            <div
              onClick={() => toggleDropdown(cat)}
              className="w-full h-14 pl-3 border border-neutral-200 bg-white rounded-lg flex items-center justify-between cursor-pointer"
            >
              <span>{selected[cat] || cat}</span>
              {openDropdown === cat ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            {openDropdown === cat && (
              <div className="absolute top-14 left-0 w-full bg-white border border-neutral-200 rounded-lg shadow z-10">
                {filterOptions[cat].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(cat, option)}
                    className="px-3 py-2 hover:bg-neutral-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
