import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Dashboard from './componet/Dashboard';

import Head from './componet/head';
import Login from './componet/Login'
import Tables from './componet/Tables';
import SideNav from './componet/SideNav';
import Signup from './componet/Signup'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Head />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2  bg-dark" style={{ height: "90vh"}} >
             <SideNav/>
            </div>
            <div className="col-10" style={{ height: "90vh" ,overflow: "scroll" }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/table" element={<Tables />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
