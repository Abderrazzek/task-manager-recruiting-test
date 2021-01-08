import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact
                    component={Login}/>
                <Route path="/" exact
                    component={Dashboard}/>
                <Route component={Page404}/>
            </Switch>
        </Router>
    );
}

export default Routes;
