import React from 'react'
import Header from '../../others/Header'
import TaskNumbers from '../../others/TaskNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {
    
    return (
        <div className='p-10 h-screen'>
            <Header changeUser ={props.changeUser}  data = {props.data} />
            <TaskNumbers data = {props.data} />
            <Tasklist data = {props.data} />
        </div>
    )
}

export default EmployeeDashboard