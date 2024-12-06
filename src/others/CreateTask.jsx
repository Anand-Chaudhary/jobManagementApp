import React, { useState, useContext } from 'react'
import AllTask from './AllTask'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [newTask, setNewTask] = useState({});

    const submitHandler = (e) =>{
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData
        console.log(data);
        

        data.forEach(function (elem) {
            if (assignTo == elem.name) {
                elem.tasks.push(newTask)
                elem.taskNumber.newTask += 1
            }
        })
        setUserData(data)
        console.log(data);
        

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <>
            <div className="border-2 p-4 mt-4 border-blue-500 rounded-xl bg-[#10101b] shadow-lg">
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className="flex flex-wrap items-start justify-between space-y-4">
                    <div className="w-full md:w-1/2 md:pr-4 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Task Title</h3>
                            <input
                                value = {taskTitle}
                                onChange = {(e)=>{setTaskTitle(e.target.value)}}
                                type="text"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                                placeholder="Enter Title of Task"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Date</h3>
                            <input
                            value = {taskDate}
                            onChange = {(e)=>{setTaskDate(e.target.value)}}
                                type="date"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Assign</h3>
                            <input
                            value = {assignTo}
                            onChange = {(e)=>{setAssignTo(e.target.value)}}
                                type="text"
                                className="w-full border-2 outline-none placeholder:text-gray-500 rounded-lg bg-gray-50 text-lg px-4 py-2 text-black"
                                placeholder="Assign to"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Category</h3>
                            <input
                            value = {category}
                            onChange = {(e)=>{setCategory(e.target.value)}}
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
                            value = {taskDescription}
                            onChange = {(e)=>{setTaskDescription(e.target.value)}}
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