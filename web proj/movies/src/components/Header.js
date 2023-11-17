import React, { useEffect, useState } from "react";
import {AppBar, Toolbar ,Autocomplete , TextField ,Tab ,Tabs} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import {Box } from "@mui/system";
import { Link } from "react-router-dom";
const dummyArray = ["Bahubali","Barbie","KGF","Oppenheimer"];
const Header = () => {
    const [value,setValue] = useState(0);
    /*const [movies,setMovies] = useState([]);
        useEffect{() => {
            getAllMovies()
                .then((data) => setMovies(data.movies))
                .catch((err) => console.log(err));
        }, []};*/
    return (
        <AppBar position="sticky" sx={{bgcolor:"#440DF5"}}>
            <Toolbar>
                <Box width={"20%"}>
                   <MovieIcon/>
                </Box>
                <Box width = {'30%'} margin = {'auto'}>
                    <Autocomplete
                        freeSolo
                        options={dummyArray.map((option) => option)}
                        renderInput={(params) =>
                            <TextField sx = {{input: {color: "white"} }} variant = "standard" {...params} placeholder="Search movies" />}
                    />
                </Box>
                <Box display = {'flex'}>
                    <Tabs textColor = "inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab label ="Movies" LinkComponent={Link} to="/Movies"/>
                        <Tab label ="Admin" LinkComponent={Link} to="/admin"/>
                        <Tab label ="Auth" LinkComponent={Link} to="/auth"/>
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;