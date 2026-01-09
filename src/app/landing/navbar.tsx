'use client';

import React, { useState } from 'react';
import Image from "next/image";

// Components
import Searchbar from "../ux/searchbar";  

// Assets
import Logo from "../../../public/icons/logo.png";

// Icons
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* Logo */}
          <Image src={Logo} alt="logo" width={35} height={50} />

          {/* Search Bar */}
          <Searchbar />

          {/* Desktop List */}
          <ul className="pl-2.5 gap-6 hidden lg:flex items-center">
            <li className='text-[0.9rem] opacity-90 hover:text-indigo-500 cursor-pointer'>Extension</li>
            <li className='text-[0.9rem] opacity-90 hover:text-indigo-500 cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Auth Buttons (md and up) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="cursor-pointer px-4 py-2 text-[0.9rem] rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-100 transition">
              Log in
            </button>

            <button className="cursor-pointer px-4 py-2 text-[0.9rem] rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition">
              Sign up
            </button>
          </div>

          {/* Hamburger (mobile only) */}
          <IoIosMenu
            size={35}
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 md:hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Image src={Logo} alt="logo" width={35} height={50} />
            <IoMdClose
              size={35}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li className="cursor-pointer">Extensions</li>
            <li className="cursor-pointer">Stack</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
