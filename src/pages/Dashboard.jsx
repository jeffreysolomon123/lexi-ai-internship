import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 p-4 sidebar-bg">

                <Sidebar />
            </div>
            <div className="flex-1 bg-white overflow-y-auto">

                <Header />
            </div>
        </div>
    )
}
export default Dashboard
