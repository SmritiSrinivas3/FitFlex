import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExCard = ({exercise}) => {
  return (
   <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl}  alt={exercise.name} loading='lazy' />
    <Stack direction='row' >
    <Button sx={{ ml: '21px', color: '#fff', background: '#FF2625', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#2E0249', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml='21px' color='black' mt='11px' pb='10px' textTransform='capitalize' fontWeight='bold' fontSize='28px'>
        {exercise.name}
    </Typography>
   </Link>
  )
}

export default ExCard
