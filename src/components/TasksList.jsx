
import React, { useContext } from 'react'
import Task from './Task';
import { Store } from '../services/Store'
const TaskList = ({ edit }) => {

    const { state } = useContext(Store);
    const { taskList } = state
    return (
        <>
            <h1>Liste des tâches</h1>
            <div style={{ padding: '0 20px' }}>
                {taskList.length > 0 ? taskList.map((item) => {
                    return (<Task data={item} edit={edit} />)
                }) : <h3>La liste des tâches est vide</h3>}
            </div>
        </>
    )

}
export default TaskList