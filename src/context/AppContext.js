import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const AppContextProvider = (props) => {
    const [students, setStudents] = useState([]);
    
    return(
        <AppContext.Provider value={{ students, setStudents }}>
            { props.children }
        </AppContext.Provider>
    )
};

export default AppContextProvider;