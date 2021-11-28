import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import studentsData from '../../mocks/studentsData.json';

const Home = () => {
    const { students, setStudents } = useContext(AppContext);
    useEffect(() => {
        setStudents([...studentsData].sort((stud1, stud2) => stud1.name.localeCompare(stud2.name)));
    }, [setStudents]);
    return (
        <div>
            <h1>Welcome to online school manager.</h1>
        </div>
    )
};

export default Home;