import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const NavBar = ({topic, setTopic}) => {
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
            
            <Link to="/"> 
            <h2>Current Topics:</h2>
                {allTopics.map((topic)=> {
                    return (                   
                    <button key={topic} onClick={()=>{setTopic(topic)} } value={topic}className='topic-buttons'><h2>{topic}</h2> </button>)})}
            </Link>
        </div>
    )
}