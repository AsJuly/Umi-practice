import React from 'react'
import { Space, Spin } from 'antd';


export default function Loading() {
    return (
        <div style={{textAlign:'center'}}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    )
}
