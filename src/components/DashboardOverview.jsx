import React from 'react'
import DashboardCards from "./DashboardCards.jsx";
import {BsBoxes} from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";

const DashboardOverview = () => {
    return (
        <div className="p-4 ml-3">
            <h1 className="text-black poppins-semibold text-3xl mt-3">Dashboard Overview</h1>
            <div className="flex items-center gap-4 mt-3">
                <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500 inter-regular text-xs">Total Workspaces</h3>
                        <BsBoxes className="text-3xl text-purple-500 bg-purple-100 text-2xl p-1 rounded" />
                    </div>
                    <h1 className="poppins-semibold text-black text-2xl mt-2">4</h1>
                    <h3 className="text-green-500 text-xs poppins-regular mt-2">^ 12% from last month</h3>
                </div>
                <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500 inter-regular text-xs">Total Signed Contracts</h3>
                        <CiFileOn className="text-3xl text-blue-500 bg-blue-100 text-2xl p-1 rounded" />
                    </div>
                    <h1 className="poppins-semibold text-black text-2xl mt-2">51</h1>
                    <h3 className="text-green-500 text-xs poppins-regular mt-2">^ 12% from last month</h3>
                </div>
                <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500 inter-regular text-xs">Contracts Drafted</h3>
                        <FaPen className="text-3xl text-yellow-500 bg-yellow-100 text-2xl p-1 rounded" />
                    </div>
                    <h1 className="poppins-semibold text-black text-2xl mt-2">4</h1>
                    <h3 className="text-red-400 text-xs poppins-regular mt-2">4% from last month</h3>
                </div>
                <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500 inter-regular text-xs">Contracts Reviewed</h3>
                        <TiTick className="text-3xl text-green-500 bg-green-100 text-2xl p-1 rounded " />
                    </div>
                    <h1 className="poppins-semibold text-black text-2xl mt-2">18</h1>
                    <h3 className="text-red-400 text-xs poppins-regular mt-2">^ 12% from last month</h3>
                </div>
                <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500 inter-regular text-xs">Contracts Translated</h3>
                        <CiGlobe className="text-3xl text-red-500 bg-red-100 text-2xl p-1 rounded mt-2" />
                    </div>
                    <h1 className="poppins-semibold text-black text-2xl">9</h1>
                    <h3 className="text-red-400 text-xs poppins-regular mt-2">^ 10% from last month</h3>
                </div>

            </div>

        </div>
    )
}
export default DashboardOverview
