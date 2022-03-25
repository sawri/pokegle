import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: "inline-block",
    marginRight: "10px",
    marginBottom: "10px"
  }));

function Abilities(props) {
    const history = useHistory();
    const abilities = props.pokeAbilities.map((ability, ind) =>
        <Item key={ind} style={{cursor: "pointer"}} onClick={() => history.push("/abilities/" + ability)}>{ability}</Item>
    );

    return <div className="pokeAbils" style={{display: "inline-block"}}>      
            {abilities}
            {props.pokeHA !== "NONE" && <Item onClick={() => history.push("/abilities/" + props.pokeHA)} style={{backgroundColor: '#d28cd8', cursor: "pointer"}}>{props.pokeHA}</Item>}
    </div>
}

export default Abilities;