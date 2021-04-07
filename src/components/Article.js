import React from 'react'
import Layout from './layout'

export default ({title, content}) => (
    <Layout>
        <h2>{title}</h2>
        <p>{content}</p>
    </Layout>
)