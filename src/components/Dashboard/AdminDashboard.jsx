import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'

const AdminDashboard = ({ data }) => {
    return (
        <div className='h-full w-full p-7'>
            <Header data = { data }/>
            <CreateTask />
        </div>
    )
}

export default AdminDashboard