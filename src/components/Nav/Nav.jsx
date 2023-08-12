import styles from './Nav.module.css'
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../api";



export const Nav = ({setUsername}) => {

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
        <div className={styles.nav}>
            <Link to="/" className={styles.link}>
                <h1>NC-NEWS</h1>
            </Link>

            <select className={styles.logIn} name="select-username" id="select-username" onChange={(event) => setUsername(event.target.value)}>
                <option value='' default>Log In</option>
                {allUsernames.map((username)=> {
                    return (
                        <option value={username} key={username}>{username}</option>)})}
            </select>
        </div>
    )
}