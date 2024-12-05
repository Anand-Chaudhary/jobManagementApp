import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const Tasklist = ({ data }) => {

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-[100%] mt-10'>
            {data.tasks.map((ellem, i) => {
                if (ellem.active) {
                    return <AcceptTask key={i} data={ellem} />
                }
                if (ellem.newTask == true && ellem.active == true) {
                    return <NewTask key={i} data={ellem} />
                }
                if (ellem.completed) {
                    return <CompleteTask key={i} data={ellem} />
                }
                if (ellem.failed) {
                    return <FailedTask key={i} data={ellem} />
                }
            })
            }
        </div>
    )
}

export default Tasklist