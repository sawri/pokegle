
import Header from "./Header.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Choices from "./Choices.jsx";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import { memo } from "react";
import PokeSearch from "./PokeSearch.jsx";
import AbilSearch from "./AbilSearch.jsx";
import AllPokemon from "./AllPokemon.jsx";
import PinsContextProvider from "../contexts/PinsContext.js";

function App() {
  const location = useLocation();
  return <div>
  <CssBaseline />
  <Header />
  <PinsContextProvider>
  <Choices />
    <Switch key={location.pathname} location={location}>
      <Route exact path="/">
        <Redirect to="/pokemon" />
      </Route>
      <Route path="/pokemon">
        <PokeSearch />
      </Route>
      <Route path="/abilities">
        <AbilSearch />
      </Route>
      <Route path="/allpokemon">
        <AllPokemon />
      </Route>
    </Switch>
  </PinsContextProvider>
  
  </div>;
}

export default memo(App);
