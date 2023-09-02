import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import HeroImg from '../assets/HeroImg.jpg'



const HeroBanner = () => {
  return (
    <>
    <img src={HeroImg} className='HeroBannerImg'/>
    <Box sx={{
        mt: {lg: '177px', xs:'70px'},
        ml: {sm: '50px'},
    }} position= 'relative' p = '20px'>
   
        <Typography color='#2E0249' fontWeight='500' fontSize='67px'>
            FitFlex
        </Typography>

        <Typography fontWeight='650' sx={{
            fontSize:{lg: '30px' ,sm: '25px'}
        }}>
        Elevate Your Fitness Journey: Stronger Bodies, Stronger Lives!
        </Typography>
        <Typography fontWeight='200' sx={{
            fontSize:{lg: '23px' ,sm: '21px'}
        }} >
        Check out the most effective exercises
        </Typography>

        <Button variant="contained" color='error' sx={{
           marginTop : {lg: '7px', sm: '2px'} 
        }}> Explore</Button>

       
    </Box>
    </>
    
  )
}

export default HeroBanner
