import { Box, Typography } from '@mui/material'
import React from 'react'
import MovieItem from './MovieItem'

const Movies = () => {
    /*const [movies, setMovies] = useState();
    useEffect(() => {
      getAllMovies()
        .then((data) => setMovies(data.movies))
        .catch((err) => console.log(err));
    }, []);*/
  return (
    <Box margin={'auto'} marginTop={4}>
        <Typography
        margin={'auto'}
        color={'white'} 
        variant='h4' 
        padding={2} 
        textAlign={'center'}
        >
            All Movies
        </Typography>
        <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
        >
            {[1,2,3,4].map((item) => (
           <MovieItem key={item}/>
        ))}
        </Box>
    </Box>  
  )
}

export default Movies