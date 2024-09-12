import React from 'react'
import Layouts from '../components/layouts/Layouts'
import { Link } from 'react-router-dom'
// import img2 from '../images/img2.jpg'
import '../styles/HomeStyle.css'
function Home() {
  return (
    <Layouts>
      <div className="home" >
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistan</p>
          <Link to="/menu">
            <button>
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </Layouts> 
  )
}

export default Home
