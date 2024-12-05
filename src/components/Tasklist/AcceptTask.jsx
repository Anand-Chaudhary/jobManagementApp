import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='h-[300px] flex-shrink-0 p-5 w-[300px] bg-yellow-500 rounded-xl'>
            <div className='flex justify-between bg-yellow-500 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{ data.category }</h3>
                <h4 className='bg-yellow-500 text-sm'>{ data.taskDate }</h4>
            </div>
            <h2 className='mt-5 flex items-start justify-start bg-yellow-500 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm bg-yellow-500 text-left mt-2'>{ data.taskDescription }</p>
            <div className='flex bg-yellow-500 justify-between mt-5 '>
                <button className='bg-green-700 py-1 px-2 rounded text-sm'>Mark as Completed</button>
                <button className='bg-red-700 py-1 px-2 rounded text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask