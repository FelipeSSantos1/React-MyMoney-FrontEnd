import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import Dashboard from '../views/dashboard';
import MinorView from '../views/Minor';
import TodoView from '../views/Todo';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/appDashboard" />
            <Route path="appTodo" component={TodoView}> </Route>
            <Route path="appDashboard" component={Dashboard}> </Route>
            <Route path="appBillingCycle" component={MinorView}> </Route>
        </Route>
        <Route path="/" component={Blank}>
            <Route path="appTodo2" component={TodoView}> </Route>
        </Route>
    </Router>
);