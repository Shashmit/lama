import React from 'react'
import "../css/Home.css"
import { Button } from '@mui/material';
const Navbar = () => {
  return (
    <div className='navbar'>
      <h3 className='logo'>Lama Chat</h3>
      <div className="user">
        <Button variant='contained' style={{backgroundColor: "#5d5b8d"}}>Sign In</Button>
      </div>
    </div>
  )
}

export default Navbar