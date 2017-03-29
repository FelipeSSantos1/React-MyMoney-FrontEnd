import {combineReducers} from 'redux'

import dashboardR from './dashboard'
import tabR from './tab'
import billingCycleR from './billingCycle'

const rootReducer = combineReducers({
	dashboard: dashboardR,
	tab: tabR,
	billingCycle: billingCycleR
})

export default rootReducer