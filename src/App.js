import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import Courses from './pages/courses/Courses';
import Home from './pages/home/Home';
import Students from './pages/students/Students';
import Header from './components/header';
import AddStudent from './pages/addStudent';
import EditStudent from './pages/editStudent';

const App = () => {
    return (
        <AppContextProvider>
            <Router>
                <Header />
                <Route exact path='/' component={Home} />
                <Route exact path='/students' component={Students} />
                <Route exact path='/courses' component={Courses} />
                <Route exact path='/students/create-new' component={AddStudent} />
                <Route exact path='/students/edit' component={EditStudent} />
            </Router>
        </AppContextProvider>
    )
}

export default App;
