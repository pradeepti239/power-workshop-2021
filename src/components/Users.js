import React, {useEffect, useState} from 'react'
import {getAllGithubUsers, followers} from '../services'
import {Link, useParams} from 'react-router-dom'
const Users = (props) =>{
    const params=useParams()
    const [users, setUsers] = useState([])
    useEffect( ()=>{
        if(params?.username){
            followers(params).then(data=>{
                setUsers(data);
            }).catch(error=>{
                setUsers([]);
            })
        }else{
            getAllGithubUsers().then(data=>{
                setUsers(data);
            }).catch(error=>{
                setUsers([]);
            })
        }

    },[params])

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Username</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.length>0 && (
                users.map((user, index)=>{
                    return(
                        <tr key={index}>
                            <td>{user?.id}</td>
                            <td>{user?.type}</td>
                            <td>{user?.login}</td>
                            <td><Link to={`/users/${user?.login}`}>Details</Link></td>
                        </tr>
                    )
                })
            )}
            </tbody>
        </table>
    )
}

export default Users