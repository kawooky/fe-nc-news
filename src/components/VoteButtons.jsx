import { useState } from "react";
import { patchVote } from "../api"
import { BiUpvote, BiDownvote } from "react-icons/bi";



export const VoteButtons = ({article_id, setIncVotes, incVotes}) => {
    const [err, setErr] = useState(null);

    
    const incrementVote = (vote) => {
        if ((vote===1 && incVotes !== 1) || (vote===-1 && incVotes !==-1)) {
            setIncVotes(vote)
            patchVote(article_id, vote).then(()=>{
            }).catch((err) => {
                setIncVotes(0)
                setErr('Something went wrong, please try again.');
              });
        }

        if ((vote===1 && incVotes === 1)|| (vote===-1 && incVotes === -1)) {
            setIncVotes(0)
            patchVote(article_id, -vote).then(()=>{
            }).catch((err) => {
                setIncVotes(0)
                setErr('Something went wrong, please try again.');
              });
        }
    }

    if (err) return <p>{err}</p>;
    return (<>
        <button onClick={()=>{incrementVote(1)}}  style={{ backgroundColor: incVotes===1 ? "green" : "white" }}><BiUpvote/></button>

        <button onClick={()=>incrementVote(-1)} style={{ backgroundColor: incVotes===-1 ? "red" : "white" }}><BiDownvote/></button>
    </>
    )
}