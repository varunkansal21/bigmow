import React from 'react'
import { Link } from 'react-router-dom'
import "./Add.css"
function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h6 class="navbar-brand"  id="heading">BigMow</h6>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <Link to="/home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
                <Link to="/adduser" class="nav-link" href="#">Add Client</Link>
            </li>
            <li class="nav-item">
                <Link to="/addBooking" class="nav-link" href="#">Add Booking</Link>
            </li>
            <li class="nav-item">
                <Link to="/view" class="nav-link" href="#">View Bookings</Link>
            </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar