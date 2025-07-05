import React from 'react'
import { BsBoxes } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";


const Sidebar = () => {
    return (
        <div className="sidebar-bg flex flex-col">

            <h1 className="poppins-extrabold text-3xl mt-3">LeXi Ai</h1>

            <div className="flex flex-col gap-1 mt-5 text-sm flex-1">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                    <BsBoxes className="text-lg" />
                    <h3 className="text-md poppins-light">Workspaces</h3>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                    <IoPeopleOutline className="text-lg" />
                    <h3 className="text-md poppins-light">Team Management</h3>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                    <FaMoneyCheckDollar className="text-lg" />
                    <h3 className="text-md poppins-light">Billings & Plans</h3>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                    <IoSettingsOutline className="text-lg" />
                    <h3 className="text-md poppins-light">Settings</h3>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                    <IoChatboxEllipsesOutline className="text-lg" />
                    <h3 className="text-md poppins-light">Contact Admin</h3>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-400 transition-colors duration-200 p-2 rounded-lg">
                <IoExitOutline className="text-lg" />
                <h3 className="text-md poppins-light">Sign Out</h3>
            </div>
        </div>



    )
}
export default Sidebar
