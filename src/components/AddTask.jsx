
import React,{useContext} from 'react'
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css'

import {Store} from '../services/Store'

const AddTask = () => {
    const { state, dispatch } = useContext(Store);
    const { taskList } = state;
    console.log('ninja',taskList)
    const onFinish = (values) => {
        dispatch({
            type: 'SET_TASK_LIST',
            payload: taskList.length>0 ?[...taskList,{id:taskList[taskList.length-1].id+1, ...values ,complete:false}]:[{id:0, ...values ,complete:false}]
        });
    }

    return (
        <>
            <h1>Créer une nouvelle tâche</h1>
            <Form
                style={{ display: 'flex', margin: 20 }}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    style={{ flex: 1, marginRight: 20 }}
                    label="Nom de la tâche"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Insérer un nom de tâche',
                        },
                    ]}
                >
                    <Input placeholder='Nom' />
                </Form.Item>

                <Form.Item
                    style={{ flex: 1 }}
                    label="Description de la tâche en une ligne"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Insérer une desciption',
                        },
                    ]}
                >
                    <Input placeholder="Description" />
                </Form.Item>

                <Form.Item
                    style={{ flex: 1, marginLeft: 20 }}
                >
                    <div style={{ marginTop: 30 }}>
                        <Button style={{borderRadius:'6px'}} type="primary" htmlType="submit">
                            Ajouter la tâche
          </Button></div>
                </Form.Item>
            </Form>
        </>
    )

}
export default AddTask