import styles from './Filters.module.css'
import { useEffect, useState } from "react";
import { getTopics } from "../../api";



export const Filters = ({setTopic, setSortBy, setOrder}) => {
    const[allTopics, setAllTopics] =useState([])


    useEffect(() => {
        getTopics()
        .then((topics) => {
            const topicSlugs = topics.map((topic) => {
                return topic.slug
            })
            setAllTopics(topicSlugs)
        })
    } , [])





    return (
        <div className={styles.filters}>

            <h2>Filters:</h2>
            <h3>Topic</h3>
            <select className={styles.dropdown} name="select-topic" id="select-topic" onChange={(event) => setTopic(event.target.value)}>
            <option value='false' default>All</option>
            {allTopics.map((topic)=> {
                    return (      
                        <option value={topic} key={topic}>{topic}</option>             
            )})}
        </select>

            <h3>Sort By</h3>
            <select className={styles.dropdown} name="select-sort-by" id="select-sort-by" onChange={(event) => setSortBy(event.target.value)}>
            <option value='created_at' default>Date</option>
            <option value='created_at' key='created_at'>Date</option>
            <option value='article_id' key='article_id'>Article ID</option>
            <option value='votes' key='votes'>Votes</option>
            <option value='comment_count' key='comment_count'>Number of Comments</option>
        </select>
            <h3>Order</h3>

        <select className={styles.dropdown} name="select-order" id="select-order" onChange={(event) => setOrder(event.target.value)}>
            <option value='DESC' default>Descending</option>
            <option value='DESC' key='DESC'>Descending</option>
            <option value='ASC' key='ASC'>Ascending</option>
        </select>

        </div>




    )
}