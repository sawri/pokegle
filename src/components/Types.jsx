import React from 'react';
import Stack from '@mui/material/Stack';

function Types(props) {
    const types = props.pokeTypes.map((type, ind) =>
        <img key={ind} alt={type} className="typeIcon" src={"/imgs/types/" + type + ".png"}/>
    );
    return <div>
        <Stack direction="row" style={{marginBottom: "20px"}} spacing={2}>
        {types}
        </Stack>   
    </div>
}

export default Types;