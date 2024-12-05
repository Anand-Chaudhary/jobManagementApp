import React from 'react'

const AcceptTask = () => {
    return (
        <div className='h-[300px] flex-shrink-0 p-5 w-[300px] bg-yellow-500 rounded-xl'>
            <div className='flex justify-between bg-yellow-500 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='bg-yellow-500 text-sm'>4th December 2024</h4>
            </div>
            <h2 className='mt-5 flex items-start justify-start bg-yellow-500 text-2xl font-semibold'>Nepali homework</h2>
            <p className='text-sm bg-yellow-500 text-left mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo, vitae quam consectetur a fugit quo! Voluptatibus, illo distinctio.</p>
            <div className='flex bg-yellow-500 justify-between mt-5 '>
                <button className='bg-green-700 py-1 px-2 rounded text-sm'>Mark as Completed</button>
                <button className='bg-red-700 py-1 px-2 rounded text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask