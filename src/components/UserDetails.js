import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams, Link} from 'react-router-dom'
import {findUser, followers} from '../services'
const UserDetails=(props)=>{
    const params= useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
        
    },[params])

    return(
        <>
            <h1>Name: {user?.name}</h1>
            <h1>Username: {user?.login}</h1>
            <h1>Address: {user?.location}</h1>
            
            <h1><Link to = {`followers`}>Followers: {user?.followers}</Link></h1>
        
            <h1><Link to = {`followings`}>Following: {user?.following}</Link></h1>
            <h1><Link to ={`repos`}>Public Repos: {user?.public_repos}</Link></h1>
        </>
    )
}

export default UserDetails;