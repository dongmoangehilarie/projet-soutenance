import React from 'react'
import { FaBell, FaUserCircle } from "react-icons/fa";
import logo  from "../assets/image/logo.png";
export default function menu() {
  return (
          <div className="flex w-full justify-between items-center bg-slate-200 p-4 shadow-md h-20">
    <h1 className=" font-bold flex justify-end w-99 items-end"><img src={logo } alt="logo" className='h-20 w-20 rounded-full '/></h1>
    <div className="flex items-center space-x-4">
      <FaBell size={24} className="text-gray-700" />
      <div className="flex items-center">
        <FaUserCircle size={32} className="text-gray-700" />
        <span className="ml-2">Dongmo hilarie</span>
      </div>
    </div>
  </div>
  )
}
