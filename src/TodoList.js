import React, { useEffect, useState } from "react";
import CreateTask from "../modali/CreateTask";
import Card from "./Card";
import { Link } from "react-router-dom";





function TodoList() {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);


    useEffect(() => {
        let arrei = localStorage.getItem('taskList'); 
      
      
      
        if(arrei){
            let obj =  JSON.parse(arrei)
            setTaskList(obj)
        }

  
    }, []) 


    function handleDelete(index){
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const  updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


  

    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }


    return (
        <>
     
        

     
            <div className="header text-center">
              
                <h3 className>Todo list</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Krijo Tasken</button>
            </div>
            <div className="task-container">
                {taskList.map((obj, index) => <li><Card key={index} taskObj = {obj} index = {index} deleteTask ={handleDelete} updateListArray = {updateListArray}></Card></li>)}  
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />







        </>


    );


};


export default TodoList;