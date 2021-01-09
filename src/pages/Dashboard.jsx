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
        <>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Todo List" key="1">
                    <TaskList />
                    <AddTask />
                </TabPane>
                <TabPane tab="Home" key="2">
                    <TaskList />
                    <AddTask />
                </TabPane>
                <TabPane tab="Tâches" key="3">
                    <TaskList edit={true} />
                </TabPane>
                <TabPane tab="Déconnexion" key="4">
                </TabPane>
            </Tabs>

        </>
    )

}
export default Dashboard