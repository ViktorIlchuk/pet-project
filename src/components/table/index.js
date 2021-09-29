import React from 'react';
import './index.scss';

const Table = ({students, checkedToggle}) => {
    const displayData = students.map(({
        checked,
        name,
        email,
        position,
        id
    }) => {
        return (
            <tr key={id}>
                <td>
                    <input 
                        id={id}
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={checkedToggle}
                    />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{position}</td>
            </tr>
        )
    })

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {displayData}
                </tbody>
            </table>
              
        </div>
    )
};

export default Table;