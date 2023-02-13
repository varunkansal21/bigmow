import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css'
import Navbar from './Navbar';

function Add() {


  const [credentials1, setCredentials1] = useState({id:"", Name: ""});
  let navigate1 = useNavigate();


  const handleSignup = async (e)=>{
    e.preventDefault();
    if(document.getElementById("id").value.length===0){
      window.alert("Mobile NUmber cannot be left empty");
      return;
    }

    if(document.getElementById("Name").value.length<=2){
      window.alert("Name should be atleast of 3 characters");
      return;
    }
    if(document.getElementById("id").value.length!=10){
      window.alert("Mobile Number should be of 10 digits");
      return;
    }
    if(window.confirm("Are you sure the details entered are correct ? ")===false){
      return;
    }
    
    const {id,Name} = credentials1;
    const response = await fetch("http://localhost:5000/addClient", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({id,Name})

    });
    const json = await response.json();
    if(json.status === 200){
        alert("Client added!")
        navigate1('/home');
        
    }
    else{
        alert("Entered Client Details already exist ");
    } 
}

  const onChange1 = (e)=>{
    setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
  }

  return (
    <>
    <Navbar/>
      <div className='form'>
            <h1 id="overHeading">Add Client</h1>
            <form onSubmit={handleSignup} className="mainForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Name *</label>
                    <input type="text" name="Name" class="form-control" id="Name"  placeholder="Name" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputName4">Mobile Number *</label>
                    <input type="number" name="id" class="form-control" id="id" placeholder="Mobile Number" onChange={onChange1}/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" >Add</button>
            </form>
        </div>
    </>
  )
}

export default Add