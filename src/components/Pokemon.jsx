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
import Fab from '@mui/material/Fab';
import PushPinIcon from '@mui/icons-material/PushPin';
import { useParams } from 'react-router-dom';
import { PinsContext } from '../contexts/PinsContext.js';


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
            <div className="parent" style={{marginLeft: "0px", border: "1px solid black", borderRadius: "0.35rem", padding: "10px"}}>
            <div className="pokeIcon"><img src={"https://www.serebii.net/pokedex-swsh/icon/" + poke.id + ".png"} alt="pokepic"/></div>
            <div className="pinButton"></div>
            <div className="pokeName">{poke.name} </div>
            <div className="types"><Types key={poke.type} pokeTypes={poke.type} /></div>
            <Abilities key={poke.id} pokeAbilities={poke.ability} pokeHA={poke.hiddenability}/>
            <Stats key={poke.stats} stats={poke.stats} />
            </div>
        </TabPanel>
       {formContentTabs}
       <Fab size="small" className="pinBtnMobile" style={{display: "none"}}color={props.pinBtnColor} aria-label="add" onClick={handleClick}>
            <PushPinIcon /> 
        </Fab> 
    </div>;
}

export default Pokemon;