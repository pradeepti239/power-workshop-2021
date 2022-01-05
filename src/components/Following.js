import React, {useEffect, useState} from 'react';
import {userfollowing} from "../services";
import {useParams, useSearchParams, Link} from 'react-router-dom';



function Following() {
    const params = useParams();
    const [followings, setfollowings] = useState([]);
    useEffect(()=>{
        userfollowing(params.username).then(data=>{
            setfollowings(data);
        })
        
    },[params])



    return (
      
        <div>
            <h3>Followed by {params.username}</h3>
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

            {followings.length>0 && (
                followings.map((user, index)=>{
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
            
        </div>
    )
}

export default Following;
