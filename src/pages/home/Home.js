import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import studentsData from '../../mocks/studentsData.json';

export default function Home() {
    const { students, setStudents } = useContext(AppContext);
    useEffect(() => {
        setStudents([...studentsData]);
    }, [setStudents]);
    return (
        <div>
            <h1>Welcome to online school manager.</h1>
        </div>
    )
};
