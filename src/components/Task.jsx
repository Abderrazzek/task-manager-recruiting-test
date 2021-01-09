import React, { useContext, useState } from 'react'
import { Card, Button, Modal, Form, Input } from 'antd';

import { Store } from '../services/Store'

const Task = ({ data, edit }) => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [isError, setIsError] = useState(false)
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

    const handleCancel = () => {
        setIsError(false)
        setIsEditModalVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        setIsError(true)
    }
    const onFinish = (values) => {
        setIsError(false)
        setIsEditModalVisible(false)
        let updatedTaskList = taskList
        updatedTaskList[taskList.findIndex(item => item.id == data.id)] = { ...data, name: values.name, description: values.description }
        dispatch({
            type: 'SET_TASK_LIST',
            payload: updatedTaskList
        });
    }

    return (
        <>
            <Card key={data.id} >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'space-between' }}>
                    <div><text style={{ fontWeight: 'bold' }}>{data.name}</text>: <text>{data.description}</text> - <Button style={{ paddingLeft: 0, paddingRight: 0 }} type="link" onClick={() => handleDelete()}>Supprimer</Button> {edit === true ? (<Button style={{ paddingLeft: 0 }} type="link" onClick={() => setIsEditModalVisible(true)}>Modifier</Button>) : ('')}</div>
                    <Button style={{ backgroundColor: data.complete ? 'green' : 'red', color: 'white', borderRadius: '6px', height: 30 }} onClick={() => handleStateChange()}>{data.complete ? 'Complétée' : 'Non complétée'}</Button>
                </div>
            </Card >
            <Modal title="Basic Modal" visible={isEditModalVisible} onCancel={handleCancel} footer={null}>
                <Form
                    style={{ maxWidth: 500 }}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Nom de la tâche"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Insérer un nom de tâche',
                            },
                        ]}
                    >
                        <Input placeholder={data.name} />
                    </Form.Item>

                    <Form.Item
                        label="Description de la tâche en une ligne"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Insérer une desciption',
                            },
                        ]}
                    >
                        <Input placeholder={data.description} />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Button type="primary" htmlType="submit" style={{ borderRadius: '6px' }}>
                                Modifier la tâche
          </Button></div>
                    </Form.Item>
                    {isError ? <div style={{ color: 'red', display: 'inline-block' }}>Remplit les deux champs d'abord</div> : ''}
                </Form>
            </Modal>
        </>)
}
export default Task