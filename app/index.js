// React Redux
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// Layout
import jquery from 'jquery'
import metismenu from 'metismenu'
import bootstrap from 'bootstrap'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'
// my app
import routes from './config/routes'
import reducers from './reducers/reducers'
// Google dev Chrome plugin
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// Constants and Variables
const store = createStore(reducers)
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
,document.getElementById('root')
);