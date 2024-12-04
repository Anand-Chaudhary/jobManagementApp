import React from 'react'
import Header from '../../others/Header'
import TaskNumbers from '../../others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 h-screen'>
            <Header />
            <TaskNumbers />
            <Tasklist />
        </div>
    )
}

export default EmployeeDashboard