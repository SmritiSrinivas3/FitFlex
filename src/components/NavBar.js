import React from 'react'
import Logo from '../assets/logo.jpg'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'  // stack is used for positioning of the immediate children of a component along a horizontal or vertical axis


const NavBar = () => {
  return (
    <div>

      <Stack
      direction='row'
      zIndex = '2'
      sx={{gap: {sm:'122px', xs:'40px'}, 
      mt: {sm: '32px', xs: '20px'}} }
      >
        <Link to='/' >
        <img src={Logo} alt='logo' style= {{width:'70px',  height:'70px', margin: '0 20px', borderRadius: '50%'}}/>
        </Link>
   



      <Stack
      direction='row'
      gap='40px'
      fontSize='18px'
      alignItems='flex-end'>
        <Link to= '/'style={{textDecoration:'none', color:'#070A52', borderBottom: '3px solid #070A52' }}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none', color:'#070A52'}}>Exercises</a>
      </Stack>



     </Stack>
    </div>
  )
}

export default NavBar
