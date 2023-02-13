import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment/moment';

function ViewReport() {

  const [credentials1, setCredentials1] = useState({id:"",from:"", to:""});


  var [users,setUsers] = useState([]);
    
  const handleFetch = async (e)=>{
      e.preventDefault();

      if(document.getElementById("id").value.length===0){
        window.alert("Please enter Registered Mobile Number");
        return;
      }
      if(document.getElementById("id").value.length!=10){
        window.alert("Mobile Number should be of 10 digits");
        return;
      }

      if(document.getElementById("from").value.length===0){
        window.alert("Please choose from date");
        return;
      }

      if(document.getElementById("to").value.length===0){
        window.alert("Please choose to date");
        return;
      }


      const {id,from,to} = credentials1;
        const response = await fetch("http://localhost:5000/showParticularClient", {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },

          body: JSON.stringify({id,from,to})

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
            <h1>View Bookings</h1>

            <Link to="/SuperView" className='super_view'>
              Enter into Super View Booking
            </Link>
            <form onSubmit={handleFetch} className="mainForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Mobile Number *</label>
                    <input type="number" id="id" name="id" class="form-control"  placeholder="Mobile Number" onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-row">
                  
                    <div class="form-group col-md-6">
                    <label for="inputName4">From Date *</label>
                    <input type="date" id="from" name="from" class="form-control"  placeholder="from" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">To Date *</label>
                    <input type="date"id="to" name="to" class="form-control"  placeholder="to" onChange={onChange1} />
                    </div>
                </div>
                <div class="form-row">
                   
                </div>
                <button type="submit" class="btn btn-primary" >Get</button>
            </form>

            <table className="table table-dark table-striped" id="table" >
                <thead>
                  <tr>
                    <th scope="col">Quantity</th>
                    <th scope="col">House No.</th>
                    <th scope="col">City</th>
                    <th scope="col">Delievery Address</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      users.map(user =>(
                        <tr>
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

export default ViewReport