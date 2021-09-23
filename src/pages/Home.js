import React, {useContext} from "react";
import Counter from "../componets/counter";
import Button from "../componets/button";
import {CounterContext} from "../context/CounterContext";

const Home = () => {
    const { increaseCounter, decreaseCounter } = useContext(CounterContext);

    return (
        <div>
            <Counter/>
            <Button type={'Increase'} onClick={increaseCounter} />
            <Button type={'Decrease'} onClick={decreaseCounter} />
        </div>
    )
};

export default Home;