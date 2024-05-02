import React from 'react'
import AppLogo from "../resources/temp_logo.png"

function Navbar() {
  return (
    <div className='navBar'>
      <div className='left-navbar'>
        <img src={AppLogo}></img>
      </div>
      <div className='right-navbar'></div>
    </div>
  )
}

export default Navbar
