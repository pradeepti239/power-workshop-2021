import React, {Component} from 'react'
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import  Followers  from "./components/Followers";
import PageNotFound from "./components/404";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetails from "./components/UserDetails";
import { followers } from './services';
import Following from './components/Following';
import Repos from './components/Repos';
class App extends Component{
    render(){
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/users' element={<Users/>}/>
                            <Route path="/users/:username" element={<UserDetails/>}/>
                            {/* <Route path="/users/:username/:follow" element={<Users/>}/> */}
                          <Route path = "/users/:username/followers" element = {<Followers/>}/>
                          <Route path = "/users/:username/followings" element = {<Following/>}/>
                          <Route path = "/users/:username/repos" element = {<Repos/>}/>

                        </Route>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
