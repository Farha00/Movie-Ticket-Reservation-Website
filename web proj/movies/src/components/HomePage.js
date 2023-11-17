import { Box, Button, Typography, keyframes } from '@mui/material';
import React from 'react'
import MovieItem from './Movies/MovieItem';
import { Link } from 'react-router-dom';

const HomePage = () => {
    /*const [movies, setMovies] = useState([]);
    useEffect(() => {
      getAllMovies()
        .then((data) => setMovies(data.movies))
        .catch((err) => console.log(err));
    }, []);*/
  return  <Box width = {"100%"} height = {'100%'} margin="auto" marginTop={2}>
    <Box margin={'auto'} width={'80%'} height={'40vh'} padding={2} >
        <img 
            src='https://images.indianexpress.com/2022/06/Jailer-concept-poster-1200by667.jpg?w=640'
            alt='jailer'
            width={'100%'}
            height={'100%'}
        />
    </Box>
    <Box padding={5} margin='auto'>
        <Typography color={'white'} variant="h4" textAlign={'center'}>
            New Releases
        </Typography>
    </Box>
    <Box margin={'auto'} display={'flex'} width={'85%'} justifyContent={'centre'} alignItems={'center'} flexWrap={'wrap'}>
        {[1,2,3,4].map((item) => (
           <MovieItem key={item}/>
        ))}
    </Box>
    <Box  display={'flex'} padding={5} margin={'auto'}>
        <Button 
            LinkComponent={Link} to="/movies" 
            variant='outlined'
            sx={
                {margin:'auto',color: '#440DF5'}
                }>
            View All Movies
        </Button>
    </Box>
  </Box>
};

export default HomePage