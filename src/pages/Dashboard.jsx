import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import DashboardOverview from "../components/DashboardOverview.jsx";
import Workspaces from "../components/Workspaces.jsx";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 p-4 sidebar-bg">

                <Sidebar />
            </div>
            <div className="flex-1 bg-white overflow-y-auto">

                <Header />
                <DashboardOverview />
                <Workspaces />
            </div>
        </div>
    )
}
export default Dashboard
