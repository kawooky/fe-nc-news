import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";

export const Header = ({setUsername}) => {
        const[allUsernames, setAllUsernames] =useState([])

        useEffect(() => {
        getUsers()
        .then((users) => {
            const usersUsernames = users.map((user) => {
                return user.username
            })
            setAllUsernames(usersUsernames)
        })
    } , [])
  return (
    <div>
    <Link to="/">
    <h1 className="app-header">NC-NEWS</h1>
    </Link>

    <select name="select-username" id="select-username" onChange={(event) => setUsername(event.target.value)}>
        <option value='' default>Select</option>
        {allUsernames.map((username)=> {
            return (
                <option value={username} key={username}>{username}</option>)})}
    </select>

    </div>
  )
};
