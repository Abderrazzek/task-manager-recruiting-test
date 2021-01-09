import React from 'react'

import AddTask from '../components/AddTask'
import TaskList from '../components/TasksList'

const Dashboard = () => {

    return (
        <>
            <TaskList />
            <AddTask />
        </>
    )

}
export default Dashboard