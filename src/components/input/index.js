import React from 'react';
import './index.scss';

const Input = ({
    onChange,
    value,
    type,
    name,
    className,
    error
}) => {
    return (
        <div>
            <input
                className={className}
                onChange={onChange}
                type={type}
                name={name}
                value={value}
                required
            />
            {error && <div>{error}</div>}
        </div>
    )
};

export default Input