import React, { useState } from 'react';
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Workspaces = () => {
    const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'

    return (
        <div className="ml-3">
            <div className="flex justify-between mr-5 ml-5 items-center">
                <h1 className="text-black text-2xl poppins-semibold">Workspaces</h1>
                <div className="flex gap-1">
                    <button
                        onClick={() => setViewType("grid")}
                        className={`btn flex items-center gap-2 border ${
                            viewType === "grid"
                                ? "bg-purple-200 text-white sidebar-bg"
                                : "bg-transparent text-black border-gray-400"
                        }`}
                    >
                        <IoGridSharp />
                        <h3>Grid</h3>
                    </button>

                    <button
                        onClick={() => setViewType("list")}
                        className={`btn flex items-center gap-2 border ${
                            viewType === "list"
                                ? "bg-purple-200 text-white sidebar-bg"
                                : "bg-transparent text-black border-gray-400"
                        }`}
                    >
                        <FaThList />
                        <h3>List</h3>
                    </button>
                </div>
            </div>
            <hr className="border-b border-gray-100 mt-4 w-full ml-3 mr-7" />
            <div className="flex items-center gap-6 mt-3 ml-7">
                <h2 className="poppins-regular text-gray-600 cursor-pointer">Contracts</h2>
                <h2 className="poppins-regular text-black cursor-pointer underline underline-offset-8">Litigation</h2>
            </div>
            <hr className="border-b border-gray-100 mt-4 w-full ml-3 mr-7" />
            <div>
                <label className="input bg-white text-black rounded-lg border border-gray-300 rounded-md border-2 ml-12 w-90 h-8 text-md">
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
                    <input type="search" required placeholder="Search by Workspace Name / Client Name" />
                </label>
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn shadow-none m-1 bg-white border border-gray-300 text-black flex items-center gap-2"
                    >
                        All Types <FaAngleDown />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                    >
                        <li><a>type-1</a></li>
                        <li><a>type-2</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn shadow-none m-1 bg-white border border-gray-300 text-black flex items-center gap-2"
                    >
                        All Status <FaAngleDown />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                    >
                        <li><a>type-1</a></li>
                        <li><a>type-2</a></li>
                    </ul>
                </div>


            </div>
        </div>

    );
};

export default Workspaces;
