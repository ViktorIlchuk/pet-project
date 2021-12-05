import React from 'react';
import Button from '../button';
import Icon from '../icon';
import './index.scss';

const Table = ({
    students,
    onHandleSelect,
    onHandleEdit,
    onHandleSort,
    iconName
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
    });

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <div className='name-column'>
                                <span>Name</span>
                                <Icon 
                                    iconName={iconName}
                                    viewBox="0 0 16 16"
                                    onClick={onHandleSort}
                                />
                            </div>
                        </th>
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