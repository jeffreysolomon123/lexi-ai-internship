import React from "react";
import { useAppStore } from "../store/useAppStore";
import { FaCalendarAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const DisplayWorkspace = () => {
    const workspace = useAppStore((state) => state.workspace);
    const workspacesArray = Object.entries(workspace);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 poppins-regular">
            {workspacesArray.length === 0 && (
                <p className="text-gray-500">No workspaces available.</p>
            )}

            {workspacesArray.map(([id, ws]) => (
                <div
                    key={id}
                    className="bg-white shadow-sm rounded-lg p-5 border border-gray-100 flex flex-col justify-between"
                >

                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full w-fit mb-2">
                        {ws.caseType}
                    </span>


                    <h2 className="text-lg font-semibold text-black mb-1">
                        {`${ws.victim || ws.accused} Case`}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">{ws.representing}</p>


                    <div className="text-sm text-gray-600 space-y-1 mb-3">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400" />
                            <span>Created: {new Date(ws.date).toDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-gray-400" />
                            <span>Last active: 2 hours ago</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-gray-400" />
                            <span>12 documents processed</span>
                        </div>
                    </div>


                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                        <button className="btn sidebar-bg btn-sm">
                            Open →
                        </button>
                        <span className="text-gray-400 text-lg">⋯</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayWorkspace;
