import './App.css';
import React, {useState} from 'react';

import Header from './Components/Header/Header';
import HeaderAdmin from './Components/HeaderAdmin/HeaderAdmin'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {

    return (
        <Router>
            <Switch>
                <Route path='/admin' component={HeaderAdmin} exact/>
                <Route path='/' component={Header}/>
            </Switch>
        </Router>
    );
}

export default App;
