import React, { useState } from 'react';

const Navbar =() =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <img src="/image/hlogo.JPG" alt="" class="absolute w-12 h-12 rounded-full group"/>
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="text-2xl font-bold">
        </div>
<div
  class="hidden md:flex p-5 overflow-hidden w-[60px] h-[20px] hover:w-[270px] bg-white shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300"
>
  <div class="flex items-center justify-center fill-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
      width="15"
      height="15"
    >
      <path
        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
      ></path>
    </svg>
  </div>
  <input
    type="text"
    class="outline-none text-[15px] bg-transparent w-full text-black font-sm px-4"
  />
</div>



        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}

              />
            </svg>
          </button>
          
        </div>
      </div>
      <div className="hidden md:flex space-x-6 bg-white text-black text-sm">
          <a href="/" className="hover:text-orange-400">News</a>
          <a href="/Blog" className="hover:text-orange-400">Blog</a>
          <a href="/Donations" className="hover:text-orange-400">Donations</a>
          <a href="/Support" className="hover:text-orange-400">Support</a>
        </div>
      {isOpen && (
        <div className="md:hidden bg-orange-500">
          <a href="/" className="block py-2 px-4 hover:bg-gray-400">News</a>
          <a href="/Blog" className="block py-2 px-4 hover:bg-gray-400">Blog</a>
          <a href="/Donations" className="block py-2 px-4 hover:bg-gray-400">Donations</a>
          <a href="/Support" className="block py-2 px-4 hover:bg-gray-400">Support</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
