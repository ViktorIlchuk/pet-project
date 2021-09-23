import React, { useContext } from "react";
import {CounterContext} from "../../context/CounterContext";
import './index.scss'

const Counter = () => {
    const { counter } = useContext(CounterContext);

    return (
        <div className={'counter'}>The button is clicked { counter } times.</div>
    )
};

export default Counter;