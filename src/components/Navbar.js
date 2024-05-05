import React from 'react'
import AppLogo from "../resources/temp_logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navBar'>
      <div className='left-navbar'>
        <img src={AppLogo} alt='application logo'></img>
      </div>
      <div className='right-navbar'>
        <Link to='/'> Home </Link>
        <Link to='/enquire'> Enquire </Link>
      </div>
    </div>
  )
}

export default Navbar
