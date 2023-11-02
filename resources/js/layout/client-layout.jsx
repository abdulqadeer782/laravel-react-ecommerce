import React from 'react';
import { Badge, Breadcrumb, Button, Col, Flex, FloatButton, Layout, Menu, Row, Space, Typography, theme } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Head } from '@inertiajs/inertia-react';

const { Header, Content, Footer } = Layout;

const ClientLayout = ({ title, children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header style={{ background: "#fff", height: '70px' }}>
                <Flex justify={'space-between'} align={'center'}>
                    <Typography.Title style={{ margin: 0 }}>Ecommerce</Typography.Title>
                    {/* menu section */}
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ border: 'none' }}
                        items={new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                    {/* right side */}
                    <Space size={'large'}>
                        <Badge count={1}>
                            <Button shape='circle' icon={<ShoppingCartOutlined />} />
                        </Badge>
                        <Button>Sign-in</Button>
                    </Space>
                </Flex>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        minHeight: '260px',
                        padding: '10px'
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Copyright ©{new Date().getFullYear()}. Created by <a href='#'>Abdul Qadeer</a>
            </Footer>
        </Layout>
    );
};
export default ClientLayout;
