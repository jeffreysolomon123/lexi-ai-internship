import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import DashboardOverview from "../components/DashboardOverview.jsx";
import Workspaces from "../components/Workspaces.jsx";
import DisplayWorkspace from "../components/DisplayWorkspace.jsx";
import {useAppStore} from "../store/useAppStore.js";
import DisplayWorkspaceList from "../components/DisplayWorkspaceList.jsx";

const Dashboard = () => {
    const {view} = useAppStore();
    return (
        <div className="flex h-screen">
            <div className="w-64 p-4 sidebar-bg">

                <Sidebar />
            </div>
            <div className="flex-1 bg-white overflow-y-auto">

                <Header />
                <DashboardOverview />
                <Workspaces />
                {view === "list"? <DisplayWorkspaceList /> : <DisplayWorkspace />}


            </div>
        </div>
    )
}
export default Dashboard
