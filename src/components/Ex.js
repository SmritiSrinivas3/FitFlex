import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material'
import {exOptions, fetchData} from '../utils/fetchData'
import ExCard from './ExCard'



const Ex = ({exercises, setExercises, bodyPart}) => {
  const [exercisesPerPage] = useState(6);
 const[currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  return (
    <Box id="exercises"
    sx={{mt:{lg: '110px'}}}
    mt = '50px'
    p = '20px'
    >
      <Typography variant='h5' mb='46px'>Showing results</Typography>
      <Stack direction='row' sx={{gap: {lg:'110px', xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {Array.isArray(exercises) && exercises.length > 0 ? (
          currentExercises.map((exercise, index) => (
            <ExCard key={index} exercise = {exercise}/>
          ))
        ) : (
          <p>No exercises to display.</p>
        )}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Ex
