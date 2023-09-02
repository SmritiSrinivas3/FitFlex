import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material';  // Box is nothing but just a div with some shading and colors
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExDetails from './pages/ExDetails';
import Footer from './components/Footer'


const App = () => {
  return (
    <Box width= "400px" sx={{ width: {xl:'1488px'}}} m="auto">
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/exercise/:id' element={<ExDetails/>} />
        </Routes>
      <Footer />
    </Box>
  )
}

export default App
