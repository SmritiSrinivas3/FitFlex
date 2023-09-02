import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'  // stack is used for positioning of the immediate children of a component along a horizontal or vertical axis
import NavBar from '../components/NavBar'
import { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Ex from '../components/Ex'
import SearchEx from '../components/SearchEx'


const Home = () => {
  const[exercises, setExercises] = useState('all')
  const[bodyPart, setBodyPart] = useState([])
  return (
    <Box>
      <HeroBanner/>
      <SearchEx setExercises= {setExercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      <Ex  exercises = {exercises} setExercises= {setExercises}  bodyPart = {bodyPart}/>
    </Box>
  )
}

export default Home
