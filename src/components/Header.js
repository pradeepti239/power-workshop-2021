import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Header = () =>{
    return (<>
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="nav-link"><Link to="/">Home</Link></a>
                <a className="nav-link"><Link to="/users">Users</Link></a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div className="container">
            <Outlet/>
        </div>
    </>)
}
export default Header