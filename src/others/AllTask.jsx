import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='p-5 bg-[#10101b] rounded-xl border-2 border-blue-500 mt-5'>
            <div className='bg-red-400 mb-4 rounded flex justify-between  py-2 px-4'>
                <h2 className='text-lg font-medium w-1/5 bg-red-400'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5 bg-red-400'>Active Task</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-400'>New Task</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-400'>Completed Task</h3>
                <h3 className='text-lg font-medium w-1/5 bg-red-400'>Failed Task</h3>
            </div>
            <div id='tasklist' >
            {userData.map(function (ellem, i) {
                return <div key={i} className=' mb-4 border-2 border-blue-500 rounded flex justify-between  py-2 px-4'>
                        <h2 className='text-lg font-medium w-1/5'>{ellem.name}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{ellem.taskNumber.active}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{ellem.taskNumber.newTask}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-green-400'>{ellem.taskNumber.completed}</h3>
                        <h3 className='text-lg font-medium w-1/5 text-red-400'>{ellem.taskNumber.failed}</h3>
                    </div>
            })}
            </div>
        </div>
    )
}

export default AllTask