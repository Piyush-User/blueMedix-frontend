import React from 'react'
import { CiLineHeight } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="flex items-center">
        <CiLineHeight className="w-6 h-6 mr-2 cursor-pointer" />
        <h1 className="text-lg font-bold">TASK</h1>
      </div>
    </nav>
  );
};

export default Navbar;
