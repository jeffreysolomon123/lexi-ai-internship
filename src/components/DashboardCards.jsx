import React from 'react'
import { BsBoxes } from "react-icons/bs";
const DashboardCards = () => {
    return (
        <div className="w-[220px] shadow-md bg-white p-4 rounded-xl ">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-500 inter-regular text-sm">Total Workspaces</h3>
                <BsBoxes className="text-3xl text-purple-500 bg-purple-100 text-2xl p-1 rounded" />
            </div>
            <h1 className="poppins-semibold text-black text-3xl">4</h1>
            <h3 className="text-green-500 text-sm poppins-regularu">^ 12% from last month</h3>
        </div>

    )
}
export default DashboardCards
