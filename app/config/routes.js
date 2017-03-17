import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import TodoView from '../views/Todo';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/appDashboard" />
            <Route path="appTodo" component={TodoView}> </Route>
            <Route path="appDashboard" component={MainView}> </Route>
            <Route path="appBillingCycle" component={MinorView}> </Route>
        </Route>
    </Router>

);