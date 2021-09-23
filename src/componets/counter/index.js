import React, { useContext } from "react";
import {CounterContext} from "../../context/CounterContext";

const Counter = () => {
    const { counter } = useContext(CounterContext);

    return (
        <div>The button is clicked { counter } times.</div>
    )
};

export default Counter;