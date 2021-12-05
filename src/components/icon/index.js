import React from "react";
import iconsLib from "./assets/index";

const Icon = ({
    iconName = '',
    size = 24,
    viewBox = "0 0 24 24",
    onClick,
    ...attributes
}) => {
    const DefinedIcon = iconsLib[iconName];

    return (
        <>
            <svg
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                onClick={onClick}
                className={`icon-${iconName}`}
                width={`${size}px`}
                height={`${size}px`}
                {...attributes}
            >
                <DefinedIcon />
            </svg>
        </>
    )
};

export default Icon;