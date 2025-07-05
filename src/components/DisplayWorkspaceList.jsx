import React from "react";
import { useAppStore } from "../store/useAppStore";

const DisplayWorkspaceList = () => {
    const workspace = useAppStore((state) => state.workspace);
    const workspacesArray = Object.entries(workspace);

    return (
        <div className="poppins-regular overflow-x-auto px-6 py-4">
            <table className="table w-full">

                <thead>
                <tr className="text-sm text-gray-600 border-b">
                    <th className="text-left py-3">Workspace Name</th>
                    <th className="text-left">Client</th>
                    <th className="text-left">Opponent</th>
                    <th className="text-left">Case</th>
                    <th className="text-left">Area of Law</th>
                    <th className="text-left">Timeline</th>
                    <th className="text-left">Actions</th>
                </tr>
                </thead>


                <tbody>
                {workspacesArray.length === 0 && (
                    <tr>
                        <td colSpan="7" className="text-gray-400 py-4 text-center">
                            No workspaces available.
                        </td>
                    </tr>
                )}

                {workspacesArray.map(([id, ws]) => (
                    <tr key={id} className="border-b hover:bg-gray-50 text-sm text-gray-800">
                        <td className="py-4 font-medium text-black">{ws.caseType || "Untitled"}</td>
                        <td>{ws.complainant || "—"}</td>
                        <td>{ws.accused || "—"}</td>
                        <td>
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                                    {ws.caseType || "N/A"}
                                </span>
                        </td>
                        <td>{ws.representing || "—"}</td>
                        <td>
                                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                    First hearing done
                                </span>
                        </td>
                        <td className="text-xl text-gray-500 cursor-pointer">⋯</td>
                    </tr>
                ))}
                </tbody>
            </table>


            {workspacesArray.length > 0 && (
                <div className="mt-4 bg-[#022c3d] text-white p-3 text-sm rounded-md flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Upgrade to add more litigation cases to the workspace
                </div>
            )}
        </div>
    );
};

export default DisplayWorkspaceList;
