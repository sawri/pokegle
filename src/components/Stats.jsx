import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.3),
    textAlign: 'left',
}));


function Stats(props) {
    const statStyle = {
        marginLeft: "10px",
        marginBottom: "10px",
        textAlign: "left"
    }

    function calcStatColor(stat) {
        if (stat > 109) {
            return "lightgreen";
        }
        else if (stat > 50) {
            return "#F8F283";
        }
        else {
            return "lightpink";
        }
    }


    return <div className="stats">
    <div className="hp"><Item>HP</Item></div>
    <div className="hpVal"><Item style={{
        ...statStyle,
        width: props.stats[0]+20 + "px",
        backgroundColor: calcStatColor(props.stats[0]), 
    }}>{props.stats[0]}</Item></div>

    <div className="attack"><Item>ATK</Item></div>
    <div className="attackVal"><Item style={{
        ...statStyle,
        width: props.stats[1]+20 + "px",
        backgroundColor: calcStatColor(props.stats[1]), 
    }}>{props.stats[1]}</Item></div>

    <div className="defense"><Item>DEF</Item></div>
    <div className="defenseVal"><Item style={{
        ...statStyle,
        width: props.stats[2]+20 + "px",
        backgroundColor: calcStatColor(props.stats[2]), 
    }}>{props.stats[2]}</Item> </div>

    <div className="specAtk"><Item>SPA</Item></div>
    <div className="specAtkVal"><Item style={{
        ...statStyle,
        width: props.stats[3]+20 + "px",
        backgroundColor: calcStatColor(props.stats[3]), 
    }}>{props.stats[3]}</Item> </div>

    <div className="specDef"><Item>SPD</Item></div>
    <div className="specDefVal"><Item style={{
        ...statStyle,
        width: props.stats[4]+20 + "px",
        backgroundColor: calcStatColor(props.stats[4]), 
    }}>{props.stats[4]}</Item></div>

    <div className="speed"><Item>SPE</Item></div>
    <div className="speedVal"><Item style={{
        ...statStyle,
        width: props.stats[5]+20 + "px",
        backgroundColor: calcStatColor(props.stats[5]), 
    }}>{props.stats[5]}</Item></div>
    </div>;
}

export default Stats;