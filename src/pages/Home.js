import React, {useContext} from "react";
import {CounterContext} from "../context/CounterContext";
import Counter from "../componets/counter";
import Button from "../componets/button";
import './Home.scss';

const Home = () => {
    const { increaseCounter, decreaseCounter } = useContext(CounterContext);

    return (
        <div className={'home-page'}>
            <Counter/>
            <div>
                <Button type={'increase'} onClick={increaseCounter} />
                <Button type={'decrease'} onClick={decreaseCounter} />
            </div>
        </div>
    )
};

export default Home;