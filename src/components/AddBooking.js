import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Add.css'

function AddReport() {
    const [credentials2, setCredentials2] = useState({id:""});
    const [credentials1, setCredentials1] = useState({Name:"", success:"", others:"",house:"",city:""});
    let navigate1 = useNavigate();
    const handleReport = async (e)=>{
        e.preventDefault();

        if(document.getElementById("id").value.length===0){
            window.alert("Please enter your Register Mobile number");
            return;
        }
        if(document.getElementById("id").value.length!=10){
            window.alert("Mobile Number should be of 10 digits");
            return;
          }
        if(document.getElementById("successful").value.length===0){
            window.alert("Please book atleast 1 Cylinder");
            return;
        }

        if(document.getElementById("house").value.length===0){
            window.alert("Please enter your House Number");
            return;
        }
        if(document.getElementById("city").value.length===0){
            window.alert("Please select City");
            return;
        }



        const {id}= credentials2;
        const {Name,success,others,house,city} = credentials1;
        const response = await fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({id,Name,success,others,house,city})

        });
        const json = await response.json();
        if(json.status === 200){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            alert("Cylinder Booked!")
            navigate1('/home');
            
        }
        else{
            alert("Please enter all the details correctly");
        } 
    }

    var [users,setUsers] = useState([]);
    
    const handleFetch = async (e)=>{
        e.preventDefault();
        const {id} = credentials2;
        const response = await fetch("http://localhost:5000/clientData", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({id})

        });
        users = await response.json();
        setUsers(users);
        document.getElementById("id").value=users[0].MOBILE;
        document.getElementById("name").value=users[0].NAME;

        document.getElementById("id").disabled=true;
    }

    const onChange1 = (e)=>{
        setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
    }
    
    const onChange2 = (e)=>{
        setCredentials2({...credentials2, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
    } 

  return (
    <>
        <Navbar/>
        <div className='form'>
            <h1>Book BigMow</h1>
            <h6 id="warning">Note: Cylinder will be booked in today's Date.</h6>
            <form onSubmit={handleFetch} >
                <label for="inputName4">Registered Mobile Number</label>
                <div id="fetchBox">
                    <input type="number" name="id" class="form-control" id="id" placeholder="Mobile Number" onChange={onChange2} disabled={false} />
                    <button type="submit"  class="btn btn-primary">Fetch</button>
                </div>
            </form>
            <form onSubmit={handleReport}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Name</label>
                    <input type="text" name="Name" id="name" class="form-control" placeholder='Name' onChange={onChange1} disabled/>
                    </div>
                    
                    <div class="form-group col-md-6">
                    <label for="inputName4">Quantity</label>
                    <input type="number" name="success" class="form-control" id="successful"  placeholder="Quantity" onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">House No.</label>
                    <input type="text" name="house" id="house" class="form-control" placeholder='House Number' onChange={onChange1}/>
                    </div>
                    
                    <div class="form-group col-md-6">
                    <label for="inputName4">City</label>
                    <select id="city" name="city" onChange={onChange1} class="form-control">
                            <option value="" disabled selected>Select City</option>
                            <option value="Abohar">Abohar</option>
                            <option value="Adampur">Adampur</option>
                            <option value="Ajitgarh">Ajitgarh</option>
                            <option value="Ajnala">Ajnala</option>
                            <option value="Akalgarh">Akalgarh</option>
                            <option value="Alawalpur">Alawalpur</option>
                            <option value="Amloh">Amloh</option>
                            <option value="Amritsar">Amritsar</option>
                            <option value="Anandpur Sahib">Anandpur Sahib</option>
                            <option value="Badhni Kalan">Badhni Kalan</option>
                            <option value="Bagha Purana">Bagha Purana</option>
                            <option value="Bakloh">Bakloh</option>
                            <option value="Balachor">Balachor</option>
                            <option value="Banga">Banga</option>
                            <option value="Banur">Banur</option>
                            <option value="Barnala">Barnala</option>
                            <option value="Batala">Batala</option>
                            <option value="Begowal">Begowal</option>
                            <option value="Bhadaur">Bhadaur</option>
                            <option value="Bhatinda">Bhatinda</option>
                            <option value="Bhawanigarh">Bhawanigarh</option>
                            <option value="Bhikhi">Bhikhi</option>
                            <option value="Bhogpur">Bhogpur</option>
                            <option value="Bholath">Bholath</option>
                            <option value="Budhlada">Budhlada</option>
                            <option value="Chima">Chima</option>
                            <option value="Dasuya">Dasuya</option>
                            <option value="Dera Baba Nanak">Dera Baba Nanak</option>
                            <option value="Dera Bassi">Dera Bassi</option>
                            <option value="Dhanaula">Dhanaula</option>
                            <option value="Dhariwal">Dhariwal</option>
                            <option value="Dhilwan">Dhilwan</option>
                            <option value="Dhudi">Dhudi</option>
                            <option value="Dhuri">Dhuri</option>
                            <option value="Dina Nagar">Dina Nagar</option>
                            <option value="Dirba">Dirba</option>
                            <option value="Doraha">Doraha</option>
                            <option value="Faridkot">Faridkot</option>
                            <option value="Fatehgarh Churian">Fatehgarh Churian</option>
                            <option value="Fatehgarh Sahib">Fatehgarh Sahib</option>
                            <option value="Fazilka">Fazilka</option>
                            <option value="Firozpur">Firozpur</option>
                            <option value="Firozpur District">Firozpur District</option>
                            <option value="Gardhiwala">Gardhiwala</option>
                            <option value="Garhshankar">Garhshankar</option>
                            <option value="Ghanaur">Ghanaur</option>
                            <option value="Giddarbaha">Giddarbaha</option>
                            <option value="Gurdaspur">Gurdaspur</option>
                            <option value="Guru Har Sahai">Guru Har Sahai</option>
                            <option value="Hajipur">Hajipur</option>
                            <option value="Hariana">Hariana</option>
                            <option value="Hoshiarpur">Hoshiarpur</option>
                            <option value="Ishanpur">Ishanpur</option>
                            <option value="Jagraon">Jagraon</option>
                            <option value="Jaito">Jaito</option>
                            <option value="Jalalabad">Jalalabad</option>
                            <option value="Jalandhar">Jalandhar</option>
                            <option value="Jandiala">Jandiala</option>
                            <option value="Jandiala Guru">Jandiala Guru</option>
                            <option value="Kalanaur">Kalanaur</option>
                            <option value="Kapurthala">Kapurthala</option>
                            <option value="Kartarpur">Kartarpur</option>
                            <option value="Khamanon">Khamanon</option>
                            <option value="Khanna">Khanna</option>
                            <option value="Kharar">Kharar</option>
                            <option value="Khemkaran">Khemkaran</option>
                            <option value="Kot Isa Khan">Kot Isa Khan</option>
                            <option value="Kotkapura">Kotkapura</option>
                            <option value="Laungowal">Laungowal</option>
                            <option value="Ludhiana">Ludhiana</option>
                            <option value="Machhiwara">Machhiwara</option>
                            <option value="Majitha">Majitha</option>
                            <option value="Makhu">Makhu</option>
                            <option value="Malaut">Malaut</option>
                            <option value="Malerkotla">Malerkotla</option>
                            <option value="Mansa">Mansa</option>
                            <option value="Maur Mandi">Maur Mandi</option>
                            <option value="Moga">Moga</option>
                            <option value="Mohali">Mohali</option>
                            <option value="Morinda">Morinda</option>
                            <option value="Mukerian">Mukerian</option>
                            <option value="Nabha">Nabha</option>
                            <option value="Nakodar">Nakodar</option>
                            <option value="Nangal">Nangal</option>
                            <option value="Nawanshahr">Nawanshahr</option>
                            <option value="Nurmahal">Nurmahal</option>
                            <option value="Nurpur Kalan">Nurpur Kalan</option>
                            <option value="Pathankot">Pathankot</option>
                            <option value="Patiala">Patiala</option>
                            <option value="Patti">Patti</option>
                            <option value="Phagwara">Phagwara</option>
                            <option value="Phillaur">Phillaur</option>
                            <option value="Qadian">Qadian</option>
                            <option value="Rahon">Rahon</option>
                            <option value="Raikot">Raikot</option>
                            <option value="Rajasansi">Rajasansi</option>
                            <option value="Rajpura">Rajpura</option>
                            <option value="Ram Das">Ram Das</option>
                            <option value="Rampura">Rampura</option>
                            <option value="Rupnagar">Rupnagar</option>
                            <option value="Samrala">Samrala</option>
                            <option value="Sanaur">Sanaur</option>
                            <option value="Sangrur">Sangrur</option>
                            <option value="Sardulgarh">Sardulgarh</option>
                            <option value="Shahid Bhagat Singh Nagar">Shahid Bhagat Singh Nagar</option>
                            <option value="Shahkot">Shahkot</option>
                            <option value="Sham Churasi">Sham Churasi</option>
                            <option value="Sirhind-Fategarh">Sirhind-Fategarh</option>
                            <option value="Sri Muktsar Sahib">Sri Muktsar Sahib</option>
                            <option value="Sultanpur Lodhi">Sultanpur Lodhi</option>
                            <option value="Sunam">Sunam</option>
                            <option value="Talwandi Bhai">Talwandi Bhai</option>
                            <option value="Talwara">Talwara</option>
                            <option value="Tarn Taran Sahib">Tarn Taran Sahib</option>
                            <option value="Zira">Zira</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <textarea type="text" class="form-control" name="others"  placeholder="Enter Your Address"  onChange={onChange1}/>
                </div>
                
                <button type="submit" class="btn btn-primary" >Book</button>
            </form>
        </div>
    </>
  )
}

export default AddReport