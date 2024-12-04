import React from 'react'
import AllTask from './AllTask'

const CreateTask = () => {
    return (
        <>
            <div className="border-2 p-4 mt-4 border-blue-500 rounded-xl bg-[#10101b] shadow-lg">
                <form className="flex flex-wrap items-start justify-between space-y-4">
                    <div className="w-full md:w-1/2 md:pr-4 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Task Title</h3>
                            <input
                                type="text"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                                placeholder="Enter Title of Task"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Date</h3>
                            <input
                                type="date"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Assign</h3>
                            <input
                                type="text"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                                placeholder="Assign to"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Category</h3>
                            <input
                                type="text"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                                placeholder="Design, Dev, etc."
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 md:pl-4 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Description</h3>
                            <textarea
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black resize-none"
                                rows="6"
                                placeholder="Enter task description..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-4">
                        <button className="bg-blue-500 font-semibold rounded-full text-lg px-6 py-2 hover:bg-blue-600 transition-all">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
            <AllTask />
        </>
    )
}

export default CreateTask