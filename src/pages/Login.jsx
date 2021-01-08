import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css'

import { Store } from '../services/Store';

function Login() {
    const [isError, setIsError] = useState(false)
    const { dispatch } = useContext(Store);

    const onFinish = (values) => {
        setIsError(false)
        if (values.email === 'test@test.com' && values.password === 'test') {
            const user = {
                name: values.email,
                token: Math.random().toString(36).substring(7)
            };

            localStorage.setItem('session', JSON.stringify(user));
            dispatch({
                type: 'SET_SESSION',
                payload: user
            });
        }
        else setIsError(true)
    }

    const onFinishFailed = (errorInfo) => {
        setIsError(true)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
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
                    label="Adresse e-mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Insérer votre adresse e-mail',
                        },
                    ]}
                >
                    <Input placeholder='e-mail' />
                </Form.Item>

                <Form.Item
                    label="Mot de passe"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Insérer votre mot de passe',
                        },
                    ]}
                >
                    <Input.Password placeholder="Mot de passe" />
                </Form.Item>

                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Button type="primary" htmlType="submit">
                            Soumettre
          </Button></div>
                </Form.Item>
                {isError?<div style={{color:'red',display:'inline-block'}}>e-mail ou mot de passe est invalide</div>:''}
            </Form>
            
        </div>
    );
}

export default Login;