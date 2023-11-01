import React from 'react';
import { Card, Form, Input, Button, Typography } from 'antd';

const LoginPage = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div className='login-container'>
            <Card
                className='login-card'>

                <Typography.Title strong style={{ textAlign: 'center', marginBottom: "20px", marginTop: '0' }} level={3}>
                    Sign In
                </Typography.Title>
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
        </div>
    );
};

export default LoginPage;
