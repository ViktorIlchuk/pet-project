import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import Students from './pages/students/Students';
import Header from './components/header';

const App = () => {
    return (
        <AppContextProvider>
            <Router>
                <Header />
                <Route exact path='/students' component={Students} />
                <Route exact path='/courses' component={Courses} />
                <Route exact path='/' component={Home} />
            </Router>
        </AppContextProvider>
    )
}

export default App;
