import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {selectTab, showTabs} from 'actions/tab'

const baseURL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
	const request = axios.get(`${baseURL}/billingCycles`)
	return{
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	}
}

export function create(values){
	return submit(values, 'post')
}

export function update(values){
	return submit(values, 'put')
}

export function remove(values){
	return submit(values, 'delete')
}
/**
 * Método genérico para processar tanto a inclusão como a alteração e a exclusão dos registros
 * @param  {object} values objeto BillingCycle
 * @param  {String} method Tipo da operação a ser realizada
 * @return {[type]}        [description]
 */
function submit(values, method){
	return dispatch => {
		const id = values._id ? values._id : ''
		axios[method](`${baseURL}/billingCycles/${id}`, values)
			.then(resp => {
				toastr.success('Sucesso', 'Operação realizada com sucesso.')
				dispatch(init())
			})
			.catch(e => {
				e.response.data.errors.forEach(error => toastr.error('Erro', error) )
			})
	}
}
/**
 * Mostra o formulário para edição
 * @param  {object} bc objeto BillingCycle
 * @return {[type]}    [description]
 */
export function showUpdate(bc){
	return [
		showTabs('tabUpdate'),
		selectTab('tabUpdate'),
		initialize('billingCycleForm', bc)
	]
}
/**
 * Mostra o formulário exclusão do ciclo de pagamento
 * @param  {object} bc objeto BillingCycle
 * @return {[type]}    [description]
 */
export function showDelete(bc){
	return [
		showTabs('tabDelete'),
		selectTab('tabDelete'),
		initialize('billingCycleForm', bc)
	]
}
/**
 * Deixa o formulário billingCycleForm no estado inicial
 * @return {[type]} [description]
 */
export function init(){
	return [
		showTabs('tabList', 'tabCreate'),
		selectTab('tabList'),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUES)
	]
}