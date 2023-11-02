import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Modal, Row, Space, Table, Typography } from 'antd'
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import AdminLayout from '../../layout/admin-layout'


export default function Category() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [selectedProduct, setSelectedProduct] = useState({})



    useEffect(() => {
        if (!modalOpen) {
            setSelectedProduct({})
            setModalTitle("")
        }
    }, [modalOpen])

    const handleDelete = (record) => console.log(record)

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    {"f" !== 'viewer' && <Button
                        title='Edit'
                        icon={<EditOutlined />}
                        onClick={() => {
                            setModalTitle(`Update ${record.name}`)
                            setModalOpen(true)
                            setSelectedProduct(record)
                        }}
                    />}
                    <Button
                        title='View'
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setModalTitle(`View ${record.name}`)
                            setModalOpen(true)
                            setSelectedProduct(record)
                            // setModalFooter(false)
                        }}
                    />
                    {"userType" === 'admin' && <Button onClick={() => handleDelete(record)} title='Delete' icon={<DeleteOutlined />} danger />}
                </Space>
            )
        }
    ];

    return (
        <AdminLayout>
            <Card
                title={(
                    <Row justify={'space-between'} align={'middle'}>
                        <Col>
                            <Typography.Title level={3}>Category</Typography.Title>
                        </Col>
                        {"userType" !== 'viewer' && <Col>
                            <Button
                                onClick={() => {
                                    setModalOpen(true)
                                    setModalTitle('Add Product')
                                }}
                            >Add Category</Button>
                        </Col>}
                    </Row>
                )}
            >
                <Table
                    columns={columns}
                    dataSource={[]}
                    rowKey={"id"}
                />
            </Card>

            <CategoryModalForm
                isOpen={modalOpen}
                title={modalTitle}
                onCancel={() => setModalOpen(false)}
                selectedProduct={selectedProduct}
            />
        </AdminLayout>
    )
}

const CategoryModalForm = ({ isOpen, title, onCancel, selectedProduct }) => {
    let [form] = Form.useForm()

    useEffect(() => {
        if (Object.keys(selectedProduct)?.length > 0) form.setFieldsValue(selectedProduct)
        if (!isOpen) form.resetFields();
    }, [isOpen, selectedProduct, form])

    const handleSubmit = () => {
        form.validateFields().then(result => {
            if (Object.keys(selectedProduct).length > 0) {
                console.log('update')
            }
            else console.log('add')

            onCancel()
        })
    }

    return (
        <Modal
            title={title}
            open={isOpen}
            onCancel={onCancel}
            footer={null}
        >
            <Form
                name='product_form'
                form={form}
                size='large'
                onFinish={handleSubmit}
            >
                <Form.Item
                    name={'name'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product name."
                        }
                    ]}
                >
                    <Input placeholder='Enter Product Name!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                <Form.Item
                    name={'category'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product category."
                        }
                    ]}
                >
                    <Input placeholder='Please Product Category!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                <Form.Item
                    name={'price'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product price."
                        },
                        {
                            pattern: new RegExp(/[0-9]/),
                            message: "Field accepts numbers only.",
                        },
                    ]}
                >
                    <Input placeholder='Enter Product Price!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                <Form.Item
                    name={'quantity'}
                    rules={[
                        {
                            required: true,
                            message: "Please enter product quantity."
                        },
                        {
                            pattern: new RegExp(/[0-9]/),
                            message: "Field accepts numbers only.",
                        },
                    ]}
                >
                    <Input placeholder='Enter Product Quantity!' readOnly={title.split(' ')[0] === "View"} />
                </Form.Item>

                {title.split(' ')[0] !== "View" && <Row gutter={[20, 0]}>
                    <Col span={12}>
                        <Button block onClick={onCancel}>Cancel</Button>
                    </Col>
                    <Col span={12}>
                        <Form.Item htmlFor=''>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                            >
                                {title === 'Add Product' ? "Add Product" : "Update Product"}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>}
            </Form>
        </Modal>
    )
}


