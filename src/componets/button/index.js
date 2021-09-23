import React, {useContext} from "react";
import {CounterContext} from "../../context/CounterContext";

const Button = ({onClick, type}) => (<button onClick={onClick}>{type}</button>)

export default Button;