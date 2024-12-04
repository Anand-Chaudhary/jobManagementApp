import React from 'react';

const TaskNumbers = () => {
    return (
        <div className='flex mt-10 justify-between gap-4 screen'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2 className='text-3xl bg-blue-400 font-bold'>0</h2>
                <h3 className='text-xl mt-0.5 bg-blue-400 font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
                <h2 className='text-3xl bg-red-400 font-bold'>0</h2>
                <h3 className='text-xl mt-0.5 bg-red-400 font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
                <h2 className='text-3xl bg-green-400 font-bold'>0</h2>
                <h3 className='text-xl mt-0.5 bg-green-400 font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl bg-yellow-400 font-bold'>0</h2>
                <h3 className='text-xl mt-0.5 bg-yellow-400 font-medium'>New Task</h3>
            </div>
        </div>
    );
};

export default TaskNumbers;
