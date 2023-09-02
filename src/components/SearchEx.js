import React , {useState, useEffect}from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchEx = ({setExercises, bodyPart, setBodyPart}) => {


  const[search, setSearch] = useState("")
  const[bodyParts, setBodyParts] = useState([])


  useEffect(() =>{
    const fetchExData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExData()
  }, [])


  // async function as we are fetching data from a api
  const handleSearch = async() =>{
    if(search){  //if search exists. If the user put some value to search up
      const exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exOptions)
      const searchedEx = exData.filter(
        (item) => item.name.toLowerCase().includes(search) 
        || item.target.toLowerCase().includes(search) 
        || item.equipment.toLowerCase().includes(search) 
        || item.bodyPart.toLowerCase().includes(search) 
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch("")
        console.log(searchedEx)
        setExercises(searchedEx)
    }
  }



  return (
    <Stack
    alignItems='center'
    justifyContent='center'
    p='20px'
    mt='100px'>
    <Typography fontWeight='650'
    sx={{
      fontSize:{lg : '30px' , sm: '23px'}
    }}
    mb='50px'
    textAlign='center'
    color='#2E0249'>Best Workouts for you</Typography>

    <Box position='relative'mb='70px'>
      <TextField height='76px' value={search} onChange={(e) =>{setSearch(e.target.value.toLowerCase())}} placeholder='Search Workouts' type='text'
      sx={{
        input:{fontWeight : '700', border: 'none', borderRadius: '4px'}, 
        width:{lg:'700px' ,sm:'120px'},
        borderRadius: {lg:'7px', sm:'2px'}
      }}
      />

     <Button className='searchBtn'
     sx={{
      bgcolor: '#FF2625', 
      color: '#FFF', 
      textTransform: 'none',
      width:{lg: '125px', sm: '80px'},
      fontSize:{lg: '20px', sm:'14px'},
      height: '56px',
      position: 'absolute'
     }}
     onClick={handleSearch}>Search</Button>
    </Box>

    <Box sx={{position:'relative', width:'100%', p:'20px'}}>
      <HorizontalScrollBar data={bodyParts}  bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
    </Box>

    </Stack>
  )
}

export default SearchEx
