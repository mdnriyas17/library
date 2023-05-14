import React from "react";
import {  Route, Routes,Link } from 'react-router-dom';
import Admin from "./Admin"
import Student  from "./Student"
 export default function Home(){
    return(
        <div className="container">
<h1 className="heading">LIBRARY </h1>
<img  src="https://www.theasianschool.net/blog/wp-content/uploads/2023/01/Importance-of-Library-in-School-Education.jpg" alt="Logo"/>
    <li >
        <button type="button" class="btn btn-success mt-5px">
    <Link to="/admin">Admin</Link></button>
    </li>
    <li><button type="button" class="btn btn-danger">
    <Link to="/student">Student</Link></button>
    </li>




<div>
    <Routes>
        <Route path="/student" Component={Student}/>
        <Route path="/admin" Component={Admin}/>
    </Routes>
</div>
      </div>
    );
 }