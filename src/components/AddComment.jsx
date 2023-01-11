import { useState } from "react"


export const AddComment = () => {

    const [commentText, setCommentText] = useState ('')
    const [username, setUsername] = useState ('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(commentText, 'submitted comment')
        console.log(username, 'submitted username')
    }


    return (
        <div className="add-comment">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a comment..." value={commentText} name="commentText" onChange={(event) => setCommentText(event.target.value)
        }/>
                <input type="text" placeholder="Username" value={username} name="username" onChange={(event) => setUsername(event.target.value)
        }/>
                <input type="submit"/>
            </form>

        </div>
    )
}