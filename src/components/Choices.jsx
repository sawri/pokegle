import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import classes from './choices.css';

export default function Choices() {
    
    return <div>
    <Box sx={{ flexGrow: 3 }}>
        <Grid container alignItems="center" justifyContent="space-evenly" spacing={2}>
        <Grid item>
            <NavLink className="choiceBtn pokeBtn" activeClassName={classes.active} style={{textDecoration: "none"}} to="/pokemon">POKEMON</NavLink>
        </Grid>
        <Grid item>
            <NavLink className="choiceBtn abilBtn" activeClassName={classes.active} style={{textDecoration: "none"}} to="/abilities">ABILITY</NavLink>
        </Grid>
        <Grid item>
            <NavLink className="choiceBtn moveBtn" activeClassName={classes.active} style={{textDecoration: "none"}} to="/moves">MOVE</NavLink>
        </Grid>
        </Grid>
        
    </Box>
  </div>;
}