import {combineReducers} from 'redux'

import dashboardR from './dashboard'

const rootReducer = combineReducers({
	dashboard: dashboardR
})

export default rootReducer