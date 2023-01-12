import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const NavBar = () => {
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
        <div className='nav-bar'>
            <h2>Topics:</h2>
                {allTopics.map((topic)=> {
                    return (
                        <Link to={`/articles/${topic}`}>
                            <h3 key={topic}>{topic}</h3>
                        </Link>)})}
        </div>
    )
}