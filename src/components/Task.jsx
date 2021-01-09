import React, { useContext } from 'react'
import { Card, Button } from 'antd';

import { Store } from '../services/Store'

const Task = ({ data }) => {
    const { state, dispatch } = useContext(Store);
    const { taskList } = state;

    const handleDelete = () => {
        let newTaskList = taskList.filter(task => task.id !== data.id)
        dispatch({
            type: 'SET_TASK_LIST',
            payload: newTaskList
        });
    }

    const handleStateChange = () => {
        let updatedTaskList = taskList
        updatedTaskList[taskList.findIndex(item => item.id == data.id)] = { ...data, complete: !data.complete }
        dispatch({
            type: 'SET_TASK_LIST',
            payload: updatedTaskList
        });
    }

    return <Card key={data.id} >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'space-between' }}>
            <div><text style={{ fontWeight: 'bold' }}>{data.name}</text>: <text>{data.description}</text> - <Button style={{ paddingLeft: 0 }} type="link" onClick={() => handleDelete()}>Supprimer</Button></div>
            <Button style={{ backgroundColor: data.complete ? 'green' : 'red', color: 'white', borderRadius: '6px', height: 30 }} onClick={() => handleStateChange()}>{data.complete ? 'Complétée' : 'Non complétée'}</Button>
        </div>
    </Card>
}
export default Task