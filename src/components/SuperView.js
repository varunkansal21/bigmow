import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useEffect } from 'react';

function SuperView() {

  const [credentials1, setCredentials1] = useState({task:"",from:"", to:""});


  var [users,setUsers] = useState([]);
    
  const handleFetch = async (e)=>{
      e.preventDefault();
      if(document.getElementById("from").value.length===0){
        window.alert("Please choose from date");
        return;
      }

      if(document.getElementById("to").value.length===0){
        window.alert("Please choose to date");
        return;
      }

      const {task,from,to} = credentials1;
        const response = await fetch("http://localhost:5000/showAllClient", {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },

          body: JSON.stringify({from,to})

      });
        users = await response.json();
      
      setUsers(users);
  }

  const onChange1 = (e)=>{
    setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
  }

  return (
    <>
        <Navbar/>
        <div className='form'>
            <h1 id="overHeading">Super View Report</h1>
            <form onSubmit={handleFetch} className="mainForm">
                <div class="form-row">
                    
                    <div class="form-group col-md-6">
                    <label for="inputName4">From Date *</label>
                    <input type="date" name="from" id="from" class="form-control"  placeholder="from" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">To Date *</label>
                    <input type="date" name="to" id="to" class="form-control"  placeholder="to" onChange={onChange1} />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" >Get</button>
            </form>

            <table className="table table-dark table-striped" id="table" >
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Mobile Number</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">House No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Deleivery Address</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      users.map(user =>(
                        <tr>
                          <td>
                            {user.NAME}
                          </td>
                          <td>
                            {user.ENTRYID}
                          </td>
                          <td>
                            {user.QUANTITY}
                          </td>
                          <td>
                            {user.HOUSE}
                          </td>
                          <td>
                            {user.CITY}
                          </td>
                          <td>
                            {user.ADDRESS}
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
        </div>
    </>
  )
}

export default SuperView