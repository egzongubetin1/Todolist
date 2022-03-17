import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList () {

    const [userat, setUserat] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/?format=json", {
         
        })
            .then((response) => response.json())
            .then((data) => setUserat(data.results));


    }, []) 

return (<div>
  


    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Nr</th>
      <th scope="col">Full Name</th>
      <th scope="col">Birth Year</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
{userat.map((emruat,indexi) => { 
return ( <tr>
      <th key={emruat.id} scope="row">{indexi}</th>
      <td>{emruat.name}</td>
      <td>{emruat.birth_year}</td>
      <td>{emruat.gender}</td>
    </tr>)
})

}
  </tbody>
</table>

</div>)
};

export default UserList; 