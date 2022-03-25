import React from 'react';
import { useParams } from 'react-router-dom';
import abils from "../abils.js";
import pokes from "../pokes.js";
import forms from "../forms.js";
import PokeTable from "./PokeTable.jsx";
function Ability(props) {
    const params = useParams();
    const abil = abils.find(function (newArr) {
        return newArr.name.toLowerCase() === params.ability.toLowerCase();
    });
    const pokesWithAbil = pokes.filter((poke) => {
        return (poke.ability[0] === abil.name.toLowerCase() || poke.ability[1] === abil.name.toLowerCase() || poke.hiddenability === abil.name.toLowerCase());
      });
      
      const formsWithAbil = forms.filter((form) => {
        return (form.ability[0] === abil.name.toLowerCase() || form.ability[1] === abil.name.toLowerCase() || form.hiddenability === abil.name.toLowerCase());
      });
    return <div>
    <div style={{border: "1px solid pink", margin: "50px"}}>
    <p className="abilityName">{abil.name}</p>
    <p className="abilDesc">{abil.description}</p>
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
        <PokeTable pokemonToAdd={pokesWithAbil} formsToAdd={formsWithAbil} height={500} pageSize={10} rowsPerPage={10} />
        </div>
    </div>;
}

export default Ability;