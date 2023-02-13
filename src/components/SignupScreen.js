import React, { useState } from 'react'
import './SignupScreen.css'
import { useNavigate} from 'react-router-dom'
// import PropTypes from 'prop-types';
function SignupScreen() {

  const [credentials, setCredentials] = useState({email: "", password:""});
  
  let navigate = useNavigate();
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value}); 
  }
  const signIn = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({email: credentials.email, password: credentials.password})

    });
    console.log(credentials.email, credentials.password);
    const json = await response.json();
    if(response.status===200){
      // Save the auth Token and redirect
      // console.log("enter");
      localStorage.setItem('token', json.authToken);
      // navigate('/');
      navigate("/home", { replace: true });
    }
    else{
      alert('Please enter the valid credentials');
    }
    console.log(json);
    return;
  }
    const register = async (e)=>{
        e.preventDefault();
        const {email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

           body: JSON.stringify({email: credentials.email, password: credentials.password})

        });
        console.log(email, password);
        const json = await response.json();
        if(response.status===200){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/home", { replace: true });
            
        }
        else{
            alert('An account already exist with this email.');
        }
        console.log(json);  
    }
  return (
    <div className='signupScreen'>
        <form onSubmit={signIn}>
            <h1 id="s_signin" >Sign in</h1>
            <input placeholder='Email'type="email"  name="email" value={credentials.email} onChange={onChange}   /> 
            <input placeholder='Password' name="password" type="password" value={credentials.password} onChange={onChange}  />
            <button>Sign In</button>
            <h4 id="s_initial">
              <span className='signupScreen_grey' id="s_initial">New to Bigmow?</span><span onClick={register} className='signupScreen_link' id="s_initial"> Sign Up now.</span></h4>
        </form>
    </div>
  )
}

// SignupScreen.propTypes = {
//   setUser: PropTypes.func.isRequired
// };
export default SignupScreen