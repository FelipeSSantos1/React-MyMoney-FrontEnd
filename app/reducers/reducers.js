import {combineReducers} from 'redux'
import {reducer as formR} from 'redux-form'
import {reducer as toastrR} from 'react-redux-toastr'

import dashboardR from './dashboard'
import tabR from './tab'
import billingCycleR from './billingCycle'

const rootReducer = combineReducers({
	dashboard: dashboardR,
	tab: tabR,
	billingCycle: billingCycleR,
	form: formR,
	toastr: toastrR
})

export default rootReducer