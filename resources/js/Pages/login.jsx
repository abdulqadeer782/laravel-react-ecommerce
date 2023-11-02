import React, { useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Alert } from 'antd';
import { router } from '@inertiajs/react'
import { useDispatch } from 'react-redux';
import { getLogin } from '../redux/reducers/authSlice';

const LoginPage = (props) => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Received values:', values);
        router.post('/login', values)
        dispatch(getLogin())
    };

    return (
        <div className='login-container'>
            <Card className='login-card'>
                <Typography.Title strong style={{ textAlign: 'center', marginBottom: "20px", marginTop: '0' }} level={3}>
                    Sign In
                </Typography.Title>
                {props.errors?.message && <Alert type='error' message={props.errors?.message} style={{ marginBottom: '10px' }} />}
                <Form
                    name="login"
                    onFinish={onFinish}
                    autoComplete="off"
                    size='large'
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder='Please input your username!' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Please input your password!' />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    );
};

export default LoginPage;
