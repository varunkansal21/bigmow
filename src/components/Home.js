import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import factory from "../images/factory.png"
import Bottom from "./Bottom"

function Home() {
  return (
    <>
        <Navbar/>
        <div className='body'>
      
        <h1 className='Main'>
            BigMow's Cylinder
        </h1>
        <Link to="/adduser">
        <button type="button" class="btn btn-outline-secondary" id='employee_button'>ADD CLIENT</button>
        </Link>
        <Link to="/addBooking">
                <button type="button" class="btn btn-outline-secondary" id='employee_button'>ADD BOOKING</button>
        </Link>
        <Link to="/view">
                <button type="button" class="btn btn-outline-secondary" id='employee_button'>VIEW BOOKINGS</button>
        </Link>
        
        </div>
        <div className='into_div'>
                <p className='intro'>
                    BigMow Cooking Gas
                </p>
                <hr className='line'/>
                <div className='container'>
                <p className='para'>
                BigMow has played a major role in India’s transition to cleaner fuels from the time it started marketing Liquified Petroleum Gas (LPG) in 1965. Brand BigMow was conceived in 1964 to bring modern cooking to Indian kitchens and the first BigMow LPG connection was released on 22nd October 1965 in Kolkata. From a humble beginning of a consumer base of around 2,000 in 1965, the brand has grown into a super brand that rules nearly 16 crore kitchens. As a matter of fact, every second cooking gas connection in India is an BigMow.
                <br/><br/>
BigMow has now become one of the largest packed-LPG brands in the world, with BigMow as the second-largest marketer of LPG globally. BigMow is a Consumer Superbrand as conferred by the Superbrands Council of India. It is a brand synonymous with safety, reliability, and convenience.
<br/><br/>

                </p>
                <img src={factory} className="factory"/>
                </div>
                <p className='para1'>
                Today, BigMow LPG is sold and delivered in six different pack sizes. The 5 kg and 14.2 kg cylinders are largely meant for domestic use and comprise almost half of all gas distributed, while the 19 kg, 47.5 kg and 425 kg Jumbo cylinders are marketed for industrial and commercial consumption. The recently launched 5 kg and 10 kg cylinders made of fiber composite with a trendy and translucent look are the latest addition to the domestic category.
                </p>
                
        </div>
        <Bottom/>
    </>
  )
}

export default Home