import React from 'react';
import forms from "../forms.js";
import Types from './Types.jsx';
import Abilities from './Abilities.jsx';
import Stats from './Stats.jsx';

function Form(props) {
    const form = forms.find(function (newArr) {
        return newArr.name === props.desiredForm;
    });

    return <div className="parent" style={{marginLeft: "0px", border: "1px solid black", padding: "10px"}}>
            
    <div className="pokeIcon"><img src={"/imgs/sprites/" + form.id + ".png"} alt="BigCo Inc. logo"/></div>
    <div className="pinButton"></div>
    <div className="pokeName">{form.name}</div>
    <div className="types"><Types key={form.type} pokeTypes={form.type} /></div>
    <Abilities key={form.ability} pokeAbilities={form.ability} pokeHA={form.hiddenability}/>
    <Stats key={form.stats} stats={form.stats} />

    </div>;
}
export default Form;