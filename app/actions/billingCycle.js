import axios from 'axios'
const baseURL = 'http://localhost:3003/api'

export function getList(){
	const request = axios.get(`${baseURL}/billingCycles`)
	return{
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	}
}