import React, {useContext, useState} from 'react';
import pokes from "../pokes.js";
import Types from './Types.jsx';
import Abilities from './Abilities.jsx';
import Stats from './Stats.jsx';
import Form from './Form.jsx';
import { Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { Tab } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import PushPinIcon from '@mui/icons-material/PushPin';
import { useParams } from 'react-router-dom';
import { PinsContext } from '../contexts/PinsContext.js';
import classes from './abilsMovesStats.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 1 }}>
            {children}
            </Box>
        )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
function Pokemon(props) {
    const [value, setValue] = useState(0);
    const [currentInfo, setCurrentInfo] = useState("stats");
    const params = useParams();
    const {pins, dispatch} = useContext(PinsContext);
    
    /*find the pokemon the user wanted in the array*/
    const poke = pokes.find(function (newArr) {
        if (props.desiredPoke === "none") {
            return newArr.name === params.pokemon;
        }
        else {
            return newArr.name === props.desiredPoke;
        }
        
    });

    /*changes the value based on which tab the user clicks or taps*/
    const handleChange = (event, newValue) => {
        setValue(newValue);  
    };

    const changeInfoTab = (button) => {
        setCurrentInfo(button);
    }
    const handleClick = () => {
        if (props.pinBtnColor === "default") {
            dispatch({type: 'ADD_PIN', pin: poke.name})
            if (pins.includes(poke.name)) {
                props.pinError();
            }
        }
        else {
            dispatch({type: 'REMOVE_PIN', pin: poke.name})
        }
    }

    const formNameTabs = poke.forms.map((form, ind) =>
        <Tab label={form} key={ind} {...a11yProps(ind+1)}/>
    );

    const formContentTabs = poke.forms.map((form, ind) =>
        <TabPanel key={ind} value={value} index={ind+1}>
            <Form desiredForm={form} />
        </TabPanel>
    );

    return <div>
        <Fab size="small" className="pinBtn" color={props.pinBtnColor} aria-label="add" onClick={handleClick}>
            <PushPinIcon /> 
        </Fab> 
        <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="">
        
        <Tab label={poke.altname !== "NONE" ? poke.altname : poke.name} {...a11yProps(0)}/>
        {formNameTabs}
        </Tabs>
        <TabPanel value={value} index={0}>
            <div className="infogrid" style={{marginLeft: "0px", border: "1px solid black", borderRadius: "0.35rem", padding: "10px"}}>
                <Types id={poke.id} key={poke.type} pokeTypes={poke.type} />
                <div className="iconandtypes" style={{display: "flex", justifyContent: "center"}}>
                    <img className="pokemonIcon" src={"/imgs/sprites/" + poke.id + ".png"} alt="pokepic"/>
                </div>
                <div className="pinButton"></div>
                <div className="pokeName" style={{textAlign: "center"}}>{poke.name} </div>
                
                <Box sx={{ flexGrow: 3 }}>
                    <Grid container alignItems="center" justifyContent="space-evenly" spacing={2}>
                    <Grid item>
                        <p className="infoBtn statsBtn" activeClassName={classes.active} onClick={() => changeInfoTab("stats")} style={{textDecoration: "none"}}>STATS</p>
                    </Grid>
                    <Grid item>
                        <p className="infoBtn abilBtn" activeClassName={classes.active} onClick={() => changeInfoTab("abilities")} style={{textDecoration: "none"}} to="/abilities">ABILITIES</p>
                    </Grid>
                    <Grid item>
                        <p className="infoBtn movesBtn" activeClassName={classes.active} onClick={() => changeInfoTab("moves")} style={{textDecoration: "none"}} to="/moves">MOVES</p>
                    </Grid>
                    </Grid>
                </Box>

                {currentInfo === "stats" && <div className="pokeStats"><Stats key={poke.stats} stats={poke.stats} /></div>}
                {currentInfo === "abilities" && <div className="abilities"><Abilities key={poke.id} pokeAbilities={poke.ability} pokeHA={poke.hiddenability}/></div>}
            </div>
        </TabPanel>
        {formContentTabs}
       <Fab size="small" className="pinBtnMobile" style={{display: "none"}}color={props.pinBtnColor} aria-label="add" onClick={handleClick}>
            <PushPinIcon /> 
        </Fab> 
    </div>;
}

export default Pokemon;