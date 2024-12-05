import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className='h-[300px] flex-shrink-0 p-5 w-[300px] bg-green-500 rounded-xl'>
            <div className='flex justify-between bg-green-500 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{ data.category }</h3>
                <h4 className='bg-green-500 text-sm'>{ data.date }</h4>
            </div>
            <h2 className='mt-5 flex items-start justify-start bg-green-500 text-2xl font-semibold'>{ data.taskTitle }</h2>
            <p className='text-sm bg-green-500 text-left mt-2'>{ data.taskDescription }</p>
            <div className="mt-2">
                <button className='w-full bg-green-500'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask