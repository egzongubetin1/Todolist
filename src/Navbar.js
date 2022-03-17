import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css';


const Navbar= () =>{
  return (

    <div class="topnav">
 

 <Link to="/">Home</Link>
 <Link to="/Todolist">ToDo List</Link>
 <Link to="/users">Userat</Link>


</div>



  );
}
export default Navbar;