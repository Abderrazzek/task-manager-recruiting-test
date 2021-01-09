import React, { useContext } from 'react'
import { Tabs } from 'antd';

import AddTask from '../components/AddTask'
import TaskList from '../components/TasksList'
import { Store } from '../services/Store'
const Dashboard = () => {
    const { state, dispatch } = useContext(Store);

    const { TabPane } = Tabs;
    const callback = (key) => {
        if (key === "4") {
            localStorage.clear();
            dispatch({
                type: 'SET_SESSION',
                payload: null
            });
        }
    }


    return (
        <Tabs defaultActiveKey="1" onChange={callback} style={{ padding: '0 20px' }}>
            <TabPane tab="Todo List" key="1">
                <div style={{ padding: '0 40px' }}>
                    <TaskList />
                    <AddTask />
                </div>
            </TabPane>
            <TabPane tab="Home" key="2">
                <div style={{ padding: '0 40px' }}>
                    <TaskList />
                    <AddTask />
                </div>
            </TabPane>
            <TabPane tab="Tâches" key="3">
                <div style={{ padding: '0 40px' }}>
                    <TaskList edit={true} />
                </div>
            </TabPane>
            <TabPane tab="Déconnexion" key="4">
            </TabPane>
        </Tabs>
    )

}
export default Dashboard