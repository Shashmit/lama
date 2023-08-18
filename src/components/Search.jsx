import { TextField } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <div className='search'>  
    <div className="searchForm">
      <input type="text" placeholder='Search'/>
    </div>
    <div className="userChat">
      <img src="https://images.unsplash.com/photo-1692283747616-b2209a722203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
    </div>
    </div>
  )
}

export default Search