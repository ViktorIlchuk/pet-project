import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";
import CounterContextProvider from "./context/CounterContext";

const App = () => {
    return (
        <CounterContextProvider>
            <Router>
                <Route path="/" component={Home} />
            </Router>
        </CounterContextProvider>
    )
}

export default App;
