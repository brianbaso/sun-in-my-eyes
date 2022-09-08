import * as React from 'react'
import Layout from '../components/layout'
import rawData from '../../content/directory.json'
import {useState} from "react";

const IndexPage = () => {
    const [data] = useState(rawData)
    return (
        <Layout pageTitle="Directory">
            <p><i>discover creatives in orlando, florida</i></p>
                {Object.entries(data).map(([key,value], i) => (
                    <p key={i}><b>{value["instagram"]}</b> {value["tags"]}</p>
                ))}
        </Layout>
    )
}

export const Head = () => <title>Home</title>

export default IndexPage