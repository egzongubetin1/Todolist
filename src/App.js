import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TodoList from './components/TodoList';
import UserList from './components/UserList';






function App() {

 return (
   <Router>
     <Navbar/>
     <Routes>
   
     <Route path='/' exact element={<HomePage />} />
     <Route path='/Todolist' exact element={<TodoList />} />
     <Route path='/users' exact element={<UserList />} />
     
     




     </Routes>






   </Router>
  );
}

export default App;