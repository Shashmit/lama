import React from 'react'
import "../css/Home.css"
import { Button } from '@mui/material';
const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='logo'>Lama Chat</h3>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1692283747616-b2209a722203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar