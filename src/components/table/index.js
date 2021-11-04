import React from 'react';
import Button from '../button';
import './index.scss';

const Table = ({
    students,
    onHandleSelect,
    onHandleEdit
}) => {
    const displayData = students.map(({
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
                        type='checkbox'
                        onChange={onHandleSelect}
                    />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{position}</td>
                <td>
                    <Button
                        id={id}
                        text='Edit'
                        onClick={() => onHandleEdit({
                            name,
                            email,
                            position,
                            id
                        })}
                    />
                </td>
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