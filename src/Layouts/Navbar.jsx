import React, { useState } from 'react';

const Navbar =() =>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
        </div>
        <img src="/image/hlogo.png" alt="" />
       

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

      <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">News</a>
          <a href="/Blog" className="hover:text-gray-400">Blog</a>
          <a href="/Donations" className="hover:text-gray-400">Donations</a>
          <a href="/Support" className="hover:text-gray-400">Support</a>
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
