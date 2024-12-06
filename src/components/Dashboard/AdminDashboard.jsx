import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-full w-full p-7'>
            <Header changeUser = {props.changeUser} data = { props.data }/>
            <CreateTask />
        </div>
    )
}

export default AdminDashboard