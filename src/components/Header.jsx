import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-white shadow-sm">
                <div className="flex-1">
                    <label className="input bg-white text-black rounded-lg border border-gray-300 rounded-md border-2 ml-12">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                <div className="flex gap-2 items-center mr-12">
                    <FaRegBell className="text-black text-xl mr-5" />
                    <div className="avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <h3 className="text-black poppins-medium">Jeffrey Solomon</h3>
                    <FaAngleDown className="text-black"/>
                </div>
            </div>
        </div>
    )
}
export default Header
