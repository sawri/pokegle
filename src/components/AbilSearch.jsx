import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import abilities from "../abilities";
import Ability from "./Ability.jsx";
import { Grid } from '@mui/material';
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function AbilSearch() {
  const history = useHistory();
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

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

  const handleChange = (event, newAbil) => {
    
    history.push("/abilities/" + newAbil);
  };

  return (
    <div style={{marginTop: "50px"}}>
      <Grid container alignItems="center" justifyContent="center" columns={1} spacing={1}>
        <Grid item>
          <Autocomplete
          id="combo-box-demo"
          open={open}
          value={null}
          onChange={handleChange}
          onOpen={handleOpen}
          onClose={() => setOpen(false)}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          noOptionsText="No such ability"
          forcePopupIcon={false}
          options={abilities}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Start typing an Ability..." />
          )}
          />
        </Grid>
    </Grid>
      <Route path="/abilities/:ability">
        <div >

        <div style={{textAlign: "center"}}>
        <Ability />
        </div>
        </div>
      </Route>
    </div>
  );
}
