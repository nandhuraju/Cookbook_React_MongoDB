import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout'

const Navbar = () => {
 
  return (
    <>
  <header
      className="bg-blue-500 text-white p-4 flex justify-between items-center"
    >
      <nav className="flex space-x-4">
        <Link to="/home" className="text-white text-lg">Home</Link>
        <Link to="/favourites" className="text-white text-lg">Favourites</Link>
        <Link to="/addrecipe" className="text-white text-lg">Add New Recipe</Link>
      </nav>
    <Logout/>
    </header>
    </>
  )
}

export default Navbar