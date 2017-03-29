// React Redux
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
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
const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			{routes}
		</Router>
	</Provider>
,document.getElementById('root')
);