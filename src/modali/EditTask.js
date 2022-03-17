import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function EditTask({ modal, toggle, updateTask , taskObj }) {
    const [taskEmri, setTaskEmri] = useState('');
    const [pershkrimi, setPershkrimi] = useState('');
    const [taskApi, setTaskApi] = useState([]);
    const [taskProcesi, setTaskProcesi] = useState('');
    const [emrat, setEmrat] = useState([]);


    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "taskEmri") {
            setTaskEmri(value)

        } else if (name === "pershkrimi") {
            setPershkrimi(value)
            
        } else if (name === "taskApi"){
            setTaskApi(value)
        } else {
            setTaskProcesi(value)
        }



      






    };
    useEffect(() => {

        setTaskEmri(taskObj.Name)
        setPershkrimi(taskObj.Desciptions)
        setTaskApi(taskObj.Apija)
        setTaskProcesi(taskObj.Procesi)




    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(e)
        let tempObj = {}
        tempObj["Name"] = taskEmri
        tempObj["Desciptions"] = pershkrimi   
        tempObj["Apija"] = taskApi 
        tempObj["Procesi"] = taskProcesi 
        updateTask(tempObj);


    

    }


    useEffect(() => {
        fetch("https://swapi.dev/api/people/?format=json")
            .then((response) => response.json())
            .then((data) => setEmrat(data.results));// ps


    }, [])





    return (

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edito Tasken</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Emri i Taskes: </label>
                        <input type="text" className="form-control" value={taskEmri} onChange={handleChange} name="taskEmri" />

                    </div>
                    <div className="form-group">
                        <label>Pershkrimi: </label>
                        <textarea rows="1" className="form-control" value={pershkrimi} onChange={handleChange} name="pershkrimi"></textarea>
                    </div>
                    <div className="form-group mt-10">
                    <label>Userat: </label>
                        <select class="form-select" aria-label="Default select example" value={taskApi} name="taskApi" onChange={handleChange} >
                            <option value=""selected disabled>---Select---</option>
                             {emrat.map((emruat) => (<option value={emruat.name}>{emruat.name}</option>))}
                         </select >
                    </div>
                    <label >Procesi: </label>


<select class="form-select" aria-label="Default select example" value={taskProcesi} name="taskProcesi" onChange={handleChange}>
    <option value="" selected disabled>---Select----</option>
    <option value="To do" >To do</option>
    <option  value="Done">Done</option>
    <option value="In process">In process</option>
  
</select>



                </form>
            </ModalBody>
            <ModalFooter>
                <button type="button" class="btn btn-primary" c1olor="primary" onClick={handleUpdate}> Ruaj</button>
                <button type="button" class="btn btn-warning" color="secondary" onClick={toggle}>Cancel</button>
            </ModalFooter>
        </Modal>

    );


};

export default EditTask;