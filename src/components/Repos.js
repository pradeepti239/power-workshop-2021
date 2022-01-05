import React, {useEffect, useState} from 'react';
import {publicrepos} from "../services";
import {useParams, useSearchParams, Link} from 'react-router-dom';

function Repos() {

    const params = useParams();
    const [repo, setrepo] = useState([]);
    useEffect(()=>{
        publicrepos(params.username).then(data=>{
            setrepo(data);
        })
        
    },[params])

    return (
        <div>
            <h3>Public repositories of {params.username}</h3>
         

            <table className="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Repository Name</th>
                <th>Link</th>
                
            </tr>
            </thead>
            <tbody>

            {repo.length>0 && (
                repo.map((repo, index)=>{
                    return(
                        <tr key={index}>
                            <td>{repo?.id}</td>
                            <td>{repo?.name}</td>
                            <td><a href={repo?.clone_url}>Click Here</a></td>
                         
                        </tr>
                    )
                })
            )}

</tbody>
        </table>
            
        </div>
    )
}

export default Repos
