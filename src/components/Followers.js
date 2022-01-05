import React, {useEffect, useState} from 'react';
import {userfollowers} from "../services";
import {useParams, useSearchParams, Link} from 'react-router-dom';



function Followers() {
    const params = useParams();
    const [follower, setfollower] = useState([]);
    useEffect(()=>{
        userfollowers(params.username).then(data=>{
            setfollower(data);
        })
        
    },[params])



    return (
      
        <div>
            <h3>Followers of {params.username}</h3>
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

            {follower.length>0 && (
                follower.map((user, index)=>{
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

export default Followers;
