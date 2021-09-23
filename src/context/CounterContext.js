import React, { createContext, useState } from "react";

export const CounterContext = createContext({});

const CounterContextProvider = (props) => {
    let [counter, setCounter] = useState(0);

    const increaseCounter = () => setCounter(++counter);
    const decreaseCounter = () => setCounter(--counter);

    return(
        <CounterContext.Provider value={{ counter, increaseCounter, decreaseCounter }}>
            { props.children }
        </CounterContext.Provider>
    )
};

export default CounterContextProvider;