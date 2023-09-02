import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const[exerciseVideos, setExerciseVideos] = useState([])
  const[targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const[eqExercises, setEqExercises] = useState([])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exOptions);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
      const targetMuscleExerciesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exOptions)
      setTargetMuscleExercises(targetMuscleExerciesData)
      const eqExerciesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.target}`, exOptions)
      setEqExercises(eqExerciesData)
    };
   
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises = {targetMuscleExercises} eqExercises = {eqExercises}/>
    </Box>
  );
};

export default ExerciseDetail;