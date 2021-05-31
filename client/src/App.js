import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {login} from "./api/http"
import Header from "./components/Header"
import Home from "./views";
import Login from "./components/Login";

function App() {
    const [isShow,setIsShow] = useState(false)
    const halderClose=()=>{
        setIsShow(false)
    }
    const hanlderLogin=()=>{
        setIsShow(true)
    }
    const haldetFinish=(data)=>{
        login(data).then(res=>{
            setIsShow(false)
            localStorage.setItem('token',res.token)
            localStorage.setItem('uname',res.uname)
            localStorage.setItem('uid',res.uid)
            window.location.reload();
        })
    }
  return (
    <>
        <BrowserRouter>
            <Header hanlderLogin={hanlderLogin} />
            <Route path='/' exact component={Home}></Route>
            <Login isShow={isShow} halderClose={halderClose} haldetFinish={haldetFinish}/>
        </BrowserRouter>
    </>
  );
}

export default App;
