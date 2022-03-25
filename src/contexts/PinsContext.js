import React, {createContext, useEffect, useReducer} from 'react';
import {pinsReducer} from "../reducers/pinsReducer.js";
export const PinsContext = createContext();

const PinsContextProvider = (props) => {
    const [pins, dispatch] = useReducer(pinsReducer, [], () => {
        const localData = localStorage.getItem('pins');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('pins', JSON.stringify(pins))
    }, [pins]);

    return (
        <PinsContext.Provider value={{pins, dispatch}}>
        {props.children}
        </PinsContext.Provider>
     );
}

export default PinsContextProvider;