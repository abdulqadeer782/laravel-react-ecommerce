import React from 'react'
import AdminLayout from '../../layout/admin-layout'
import { Card, Col, Row } from 'antd'

function Main() {
    return (
        <AdminLayout>
            <Row gutter={[20, 20]}>
                {["Total Product", "Pending Approval", "Total Delievered", "Running Item"].map((name) => (
                    <Col span={12} key={{ name }}>
                        <Card>{name}</Card>
                    </Col>
                ))}
            </Row>
        </AdminLayout>
    )
}

export default Main
