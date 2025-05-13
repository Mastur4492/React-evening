import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-dark p-2 d-flex justify-content-around '>
       <Link to='/'>Home</Link>
       <Link to='/Contact'>Contect us</Link>
       <Link to='/About'>About</Link>
       <Link to='/Services'>Services</Link>
    </nav>
  )
}

export default Navbar