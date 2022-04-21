import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='navbar'>
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/student">Students</Link>
        <Link className="navbar-brand" to="/contact-us">Contact Us</Link>
   </nav>
      
  )
}

export default Navbar