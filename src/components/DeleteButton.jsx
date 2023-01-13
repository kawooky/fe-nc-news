import { useState } from "react";
import { deleteCommentById } from "../api"



export const DeleteButton = ({comment_id, setDeletedCommentId, err, setErr}) => {




    const handleClick = () => {
        setErr(null)
        deleteCommentById(comment_id)
        .catch((error)=>{
            setErr('oops something went wrong')
            console.log('there has been an error')
        })
        setDeletedCommentId(comment_id)
    }
 

    return (
        <div>
                <button onClick={handleClick}>Delete</button> 
                <p>{err ? err : ''}</p>
        </div>

    )
}