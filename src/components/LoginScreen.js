import React,{useState} from 'react'
import './LoginScreen.css';
import SignupScreen from './SignupScreen';
import PropTypes from 'prop-types';
function LoginScreen() {
    const[signIn,setSignIn]=useState(false);
  return (
    <>
        {/* <Link to="/home" >Direct to home screen</Link> */}
        <div className='loginScreen'>
            <>
                <div className='loginScreen_background'>
                    <h1 id='wallpaper'>BigMow</h1>
                    <button className='loginScreen_button' onClick={()=>setSignIn(true)}>
                        Sign in
                    </button>
                    <div className='loginScreen_gradient'>

                    </div>
                    <div className='loginScreen_body' >
                    {signIn ?(
                            <SignupScreen/>
                        ):(
                            <>
                            <h1>
                                Unlimited Gas Supply, Cylinders and more.
                            </h1>
                            <h2>Book Anywhere.Cancel at any time</h2>
                            <h3>
                                Ready to book? Enter your email to create account or sign in.
                            </h3>
                            <div className='loginScreen_input'>
                                <form>
                                    <button onClick={()=>setSignIn(true)}className='loginScreen_getStarted'>GET STARTED</button>
                                </form>
                            </div>
                            </>
                    )}
                        
                    </div>
                </div>
            </>
        </div>
    </>
  )
}
// LoginScreen.propTypes = {
//     setUser: PropTypes.func.isRequired
//   };
export default LoginScreen