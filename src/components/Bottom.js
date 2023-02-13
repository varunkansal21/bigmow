import React from 'react'
import './Bottom.css'
import footer from "../images/footer.png"
import { Link } from 'react-router-dom'

export default function Bottom() {
  return (
    <>
        <div id="footer">
            <div id="first_footer">
                <h1 id="help">We're here to help you</h1>
                <Link to="/contactus">
                    <button className='button' >
                        Dealership  Inquiry
                    </button>
                </Link>
                <div style={{display:"flex",marginBottom:"-7px"}}>
                    <Link to="tel:+91 9872802227" style={{textDecoration:"none"}}>
                    <h3 className='info' style={{marginTop:"35px",textDecoration:"none"}}>
                        1234567891
                    </h3>
                    </Link>
                </div>

                <Link to="mailto:suntexcableind@gmail.com"  style={{textDecoration:"none"}}>
                    <h3 className='info'  style={{textDecoration:"none"}}>
                        bigmow@gmail.com
                    </h3>
                </Link>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h3 className='info' style={{textDecoration:"none"}}>
                        https://bigmow.in/
                    </h3>
                </Link>
                <div style={{marginTop:"53px"}}>
                    <i className="fa-brands fa-whatsapp" id="whatsapp"></i>
                    <Link to="https://wa.me/+911234567891?text=Hello want to know something.............." className='whatsapp'>
                        Connect with us on whatsapp 
                    </Link>
                </div>
            </div>
            <div id="second_footer">
                <h1 id="main">BigMow</h1>
                <Link to="/adduser" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Add Client
                </h3>
                </Link>
                <Link to="/addBooking" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Add Bookings
                </h3>
                </Link>
                <Link to="/view" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    View Bookings
                </h3>
                </Link>
                <Link to="/" style={{"textDecoration":"none"}}>
                <h3 className='info'>
                    Careers
                </h3>
                </Link>
            </div>

            <div id="third_footer">
                <img src={footer} id="footer_image" alt="..."/>
            
            </div>

        </div>    
    
    </>
  )
}