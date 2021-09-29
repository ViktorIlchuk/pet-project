import React from 'react';
import './index.scss';

const Button = ({onClick, text , className}) => {
    return (
        <button 
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default Button;