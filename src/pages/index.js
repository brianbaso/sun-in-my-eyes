import * as React from 'react'
import Layout from '../components/layout'
import initData from '../../content/directory.json'
import {useState} from "react";
import '../index.css'

const IndexPage = () => {
    const [data, setData] = useState(initData)
    const [selected, setSelected] = useState('')
    const [key] = useState({
        "music": ["musician", "rapper", "bass", "drummer", "producer", "audio engineer", "dj", "vocalist", "guitarist"],
        "visual": ["visual artist", "3d designer", "photographer", "videographer", "illustrator", "mixed media", "film", "fashion", "actor", "actress", "painter", "tattoo"],
        "groups": ["collective", "magazine", "studio", "recording studio"],
        "promo": ["events", "promoter"]
    })

    const filterTag = (selectedTag) => {
        setSelected(selectedTag)
        const tagArray = Object.values(initData).map((x) => ({...x, tags: x['tags'].replace(/\s*,\s*/g, ",").split(',')}))

        let filtered = []
        let len = Object.values(tagArray).length

        for (let i = 0; i < len; i++) {
            let tagsLen = Object.values(tagArray)[i].tags.length

            for (let j = 0; j < tagsLen; j++) {
                let curTag = Object.values(tagArray)[i].tags[j]

                if (key[selectedTag].includes(curTag)) {
                    filtered.push(Object.values(tagArray)[i])
                    break;
                }
            }
        }

        const cleaned = Object.values(filtered).map((x) => ({...x, tags: x['tags'].join(', ')}))
        setData(cleaned)
    }

    return (
        <Layout pageTitle="Directory">
            <p><i>discover creatives in orlando, florida</i></p>
            <div className="cat-list">
                <button className={selected === 'music' ? "cat-item selected" : "cat-item"}
                        onClick={() => filterTag('music')}>music</button>
                <button className={selected === 'visual' ? "cat-item selected" : "cat-item"}
                        onClick={() => filterTag('visual')}>visual</button>
                <button className={selected === 'groups' ? "cat-item selected" : "cat-item"}
                        onClick={() => filterTag('groups')}>groups</button>
                <button className={selected === 'promo' ? "cat-item selected" : "cat-item"}
                        onClick={() => filterTag('promo')}>promo</button>
            </div>
            {Object.entries(data).map(([key,value], i) => (
                <p key={i}><b>{value["instagram"]}</b> {value["tags"]}</p>
            ))}
        </Layout>
    )
}

export const Head = () => <title>Home</title>

export default IndexPage