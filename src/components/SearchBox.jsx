import { Grid } from '@mui/material';
import React from 'react';
import PokeSearch from "./PokeSearch.jsx";
import AbilSearch from './AbilSearch.jsx';

export default function SearchBox(props) {
    return <div className="searchinfo">


    <Grid container alignItems="center" justifyContent="center" columns={1} spacing={2}>
        <Grid item xs={8}>
            {props.btnPressed === "pokeBtn" && <PokeSearch />}
            {props.btnPressed === "abilBtn" && <AbilSearch />}
        </Grid>

    </Grid>
  
    </div>;
}