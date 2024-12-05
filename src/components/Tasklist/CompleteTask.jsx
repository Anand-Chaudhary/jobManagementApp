import React from 'react'

const CompleteTask = () => {
    return (
        <div className='h-[300px] flex-shrink-0 p-5 w-[300px] bg-green-500 rounded-xl'>
            <div className='flex justify-between bg-green-500 items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>High</h3>
                <h4 className='bg-green-500 text-sm'>4th December 2024</h4>
            </div>
            <h2 className='mt-5 flex items-start justify-start bg-green-500 text-2xl font-semibold'>Nepali homework</h2>
            <p className='text-sm bg-green-500 text-left mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo, vitae quam consectetur a fugit quo! Voluptatibus, illo distinctio.</p>
        </div>
    )
}

export default CompleteTask