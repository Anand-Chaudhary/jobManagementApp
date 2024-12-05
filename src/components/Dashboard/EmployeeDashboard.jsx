import React from 'react'
import Header from '../../others/Header'
import TaskNumbers from '../../others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({ data }) => {
    
    return (
        <div className='p-10 h-screen'>
            <Header data = {data} />
            <TaskNumbers data = {data} />
            <Tasklist data = {data} />
        </div>
    )
}

export default EmployeeDashboard