import { TextField } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <TextField variant='standard' label="Search" fullWidth margin="dense"/>
    </div>
  )
}

export default Search