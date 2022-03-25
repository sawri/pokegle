import React, { memo, useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import Pokemon from "./Pokemon.jsx";
import pokemon from "../pokemon.js";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { PinsContext } from "../contexts/PinsContext.js";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function PokeSearch() {
  
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [open, setOpen] = useState(false);
  const {pins} = useContext(PinsContext)
  const [openAlert, setOpenAlert] = useState(null);
  const [errorMsg, setErrMsg] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const pinError = () => {
      setOpenAlert(true);
      setErrMsg(true);
  }

  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };
  const handleInputChange = (event, newInputValue) => {
    
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const handleChange = (event, newPoke) => {
    setSelectedPokemon(newPoke);
    history.push("/pokemon/" + newPoke);
  };

  const loadPins = pins.map((pok, ind) =>
    <Pokemon key={pok} desiredPoke={pok} val={0} pinError={pinError} pinBtnColor="primary"/>
  );

  return (
    <div style={{width: "auto", height: "auto", marginTop: "50px"}}>
    <Grid container alignItems="center" justifyContent="center" columns={1} spacing={1}>
      <Grid item>
        <Autocomplete
        id="combo-box-demo"
        open={open}
        onOpen={handleOpen}
        value={selectedPokemon}
        onChange={handleChange}
        onClose={() => setOpen(false)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        noOptionsText="No such pokemon"
        forcePopupIcon={false}
        options={pokemon}
        sx={{ width: 300, border: "1px black rounded" }}
        renderInput={(params) => (
          <TextField {...params} label="Start typing a Pokemon..." />
        )}
        />  
      </Grid>
    </Grid>
    <div className="pkmnGrid" style={{marginTop: "20px"}}>  
    <Route exact path="/pokemon/:pokemon">
     <Pokemon key={selectedPokemon} desiredPoke="none" val={0} pinError={pinError} pinBtnColor="default"/>
    </Route>
    {loadPins}
    
    </div>
    {errorMsg && <div><Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        The pin you are trying to add already exists.
      </Alert>
    </Snackbar></div>}
    </div>
  );
}
export default memo(PokeSearch);