import React, { useState } from 'react';
import {
    DashboardOutlined,
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Flex, Dropdown, Space, Avatar, Typography } from 'antd';
import { Head, Link } from '@inertiajs/inertia-react';
const { Header, Sider, Content, Footer } = Layout;

const items = [
    {
        key: '1',
        label: "Logout",
    }
];

const AdminLayout = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
                <div style={{ height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography.Title level={collapsed ? 1 : 3} style={{ margin: 0 }}>{collapsed ? "E" : "Ecommerce"}</Typography.Title>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        {
                            key: '/admin',
                            icon: <DashboardOutlined />,
                            label: <Link href='/admin'>Dashboard</Link>,
                        },
                        {
                            key: '/admin/products',
                            icon: <VideoCameraOutlined />,
                            label: <Link href='/admin/products'>Products</Link>,
                        },
                        {
                            key: '/admin/category',
                            icon: <UploadOutlined />,
                            label: <Link href='/admin/category'>Category</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >

                    <Flex justify={'space-between'} align={'center'} style={{ paddingRight: '20px' }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <Avatar size={"large"} style={{ cursor: 'pointer' }}>U</Avatar>
                        </Dropdown>
                    </Flex>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright @{new Date().getFullYear()}. Developed by <a href='#' target='_blank'>Abdul Qadeer</a></Footer>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;
