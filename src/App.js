import React from 'react';
import AppPage from './pages/AppPage';
import Landing from './pages/landing';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
    return (
        <Router>

            <div className="App">
                <Switch>
                    <Route path="/app">
                        <AppPage /> 
                    </Route>

                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
