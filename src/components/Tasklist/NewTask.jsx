import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='h-[300px] flex-shrink-0 p-5 w-[300px] bg-blue-500 rounded-xl'>
            <div className='flex justify-between bg-blue-500 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
                <h4 className='bg-blue-500 text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 flex items-start justify-start bg-blue-500 text-2xl font-semibold'> {data.taskTitle} </h2>
            <p className='text-sm bg-blue-500 text-left mt-2'>{data.description}</p>
            <div className="mt-4">
                <button className='w-full bg-blue-500'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask