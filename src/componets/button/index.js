import React from "react";
import './index.scss';

const Button = ({onClick, type}) => (<button className={type} onClick={onClick}>{type}</button>)

export default Button;