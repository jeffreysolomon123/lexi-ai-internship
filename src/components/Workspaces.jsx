import React, { useState } from 'react';
import { IoGridSharp } from "react-icons/io5";
import { FaThList, FaAngleDown, FaPlus } from "react-icons/fa";
import {useAppStore} from "../store/useAppStore.js";

const Workspaces = () => {
    const [viewType, setViewType] = useState("grid");
    const addToWorkspace = useAppStore((state) => state.addToWorkspace);
    const workspace = useAppStore((state) => state.workspace);
    const {view,isChangingView} = useAppStore();

    const [formData, setFormData] = useState({
        caseType: '',
        complainant: '',
        accused: '',
        victim: '',
        allegations: '',
        facts: '',
        date: '',
        representing: '',
        image: '',
    });

    const handleAutofill = () => {
        setFormData({
            caseType: 'Criminal',
            complainant: 'John Doe',
            accused: 'Jane Smith',
            victim: 'Company XYZ',
            allegations: 'Fraud and embezzlement',
            facts: 'Funds were diverted illegally over a period of 6 months.',
            date: new Date().toISOString().split('T')[0], // today's date
            representing: 'Mr. Lawyer',
            image: 'https://via.placeholder.com/150'
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // Function to handle modal transition
    const handleNext = () => {
        document.getElementById('my_modal_3').close();
        document.getElementById('my_modal_4').showModal();
    };

    return (
        <div className="ml-3 poppins-regular">


            <div className="flex justify-between mr-5 ml-5 items-center">
                <h1 className="text-black text-2xl poppins-semibold">Workspaces</h1>
                <div className="flex gap-1">
                    <button
                        onClick={() => {
                            setViewType("grid")
                            isChangingView();
                        }}
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
                        onClick={() => {
                            setViewType("list")
                            isChangingView();
                        }}
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


            <div className="mt-4 flex items-center gap-2">

                <label className="input bg-white text-black rounded-lg border border-gray-300 border-2 ml-12 w-90 h-8 text-md">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search by Workspace Name / Client Name" />
                </label>


                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn shadow-none m-1 bg-white border border-gray-300 text-black flex items-center gap-2 h-8"
                    >
                        All Types <FaAngleDown />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                        <li><a>type-1</a></li>
                        <li><a>type-2</a></li>
                    </ul>
                </div>


                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn shadow-none m-1 bg-white border border-gray-300 text-black flex items-center gap-2 h-8"
                    >
                        All Status <FaAngleDown />
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                        <li><a>type-1</a></li>
                        <li><a>type-2</a></li>
                    </ul>
                </div>


                <button
                    className="btn h-8"
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                    <FaPlus /> Create New Workspace
                </button>
            </div>


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-white">
                            ✕
                        </button>
                    </form>

                    <h3 className="font-bold text-lg mb-4 text-black poppins-semibold">Create New Workspace</h3>

                    <form className="space-y-4 bg-white poppins-regular">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload the case files
                            </label>
                            <label
                                htmlFor="fileInput"
                                className="mt-5 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-gray-400 transition"
                            >
                                <svg className="h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                <p className="font-semibold text-sm text-gray-600">Drag and drop your file here</p>
                                <p className="text-xs text-gray-500 mt-1">PDF (max. 20 MB)</p>
                                <input id="fileInput" type="file" className="hidden" accept=".pdf" />
                            </label>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Add case facts manually
                            </label>
                            <textarea
                                placeholder="Enter case description"
                                className="textarea textarea-bordered w-full bg-white border border-gray-300 rounded-md p-4 text-black"
                                rows="3"
                            ></textarea>
                        </div>


                        <div className="flex justify-end">
                            <button type="button" onClick={handleNext} className="btn sidebar-bg">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>


            <dialog id="my_modal_4" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-white">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-black poppins-semibold">Case Details</h3>
                    <button
                        type="button"
                        onClick={handleAutofill}
                        className="btn btn-sm mb-2 bg-gray-200 text-black hover:bg-gray-300"
                    >
                        Autofill Sample Data
                    </button>


                    <form className="space-y-3 mt-4 poppins-regular text-black">
                        {[
                            ["caseType", "Case Type"],
                            ["complainant", "Complainant"],
                            ["accused", "Accused"],
                            ["victim", "Victim"],
                            ["allegations", "Allegations"],
                            ["facts", "Facts"],
                            ["representing", "Representing"],
                            ["image", "Image URL"]
                        ].map(([name, label]) => (
                            <div key={name}>
                                <label className="block text-sm mb-1">{label}</label>
                                <input
                                    name={name}
                                    type="text"
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="input input-bordered w-full bg-white border-gray-300 text-black"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="block text-sm mb-1">Date</label>
                            <input
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="input input-bordered w-full bg-white border-gray-300 text-black"
                            />
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="button"
                                className="btn sidebar-bg"
                                onClick={() => {
                                    const id = Math.random().toString(36).substring(2, 10); // random id
                                    addToWorkspace(
                                        id,
                                        formData.caseType,
                                        formData.complainant,
                                        formData.accused,
                                        formData.victim,
                                        formData.allegations,
                                        formData.facts,
                                        formData.date,
                                        formData.representing,
                                        formData.image
                                    );
                                    console.log("Current Workspace State:", useAppStore.getState().workspace);
                                    document.getElementById('my_modal_4').close();
                                    setFormData({
                                        caseType: '',
                                        complainant: '',
                                        accused: '',
                                        victim: '',
                                        allegations: '',
                                        facts: '',
                                        date: '',
                                        representing: '',
                                        image: '',
                                    });
                                }}
                            >
                                Finish
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>

        </div>
    );
};

export default Workspaces;
