import React from 'react';
import './index.scss';

const Input = ({
    onChange,
    value,
    type,
    name,
    className,
    error,
    defaultValue
}) => {
    return (
        <div>
            <input
                className={className}
                onChange={onChange}
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue || ''}
                required
            />
            {error && <div>{error}</div>}
        </div>
    )
};

export default Input