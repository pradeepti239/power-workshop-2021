import React, {Component} from 'react'
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import PageNotFound from "./components/404";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetails from "./components/UserDetails";
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
                            <Route path="/users/:username/:follow" element={<Users/>}/>
                        </Route>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
