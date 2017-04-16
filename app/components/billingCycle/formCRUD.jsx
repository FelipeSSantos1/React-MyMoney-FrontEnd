import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import {init} from 'actions/billingCycle'

class BillingCycleForm extends Component {

	render(){
		const {handleSubmit, readOnly} = this.props
		return(
			<form role="form" onSubmit={handleSubmit} >
				<div>
					<div className="form-group col-xs-12 col-md-8 ">
						<label className="control-label" htmlFor="name">Nome</label>
						<Field name="name" component="input" placeholder="Primeira Quinzena" className="form-control" readOnly={readOnly} />
					</div>
					<div className="form-group col-xs-12 col-md-2 ">
						<label className="control-label">Mês</label>
						<Field name="month" component="input" type="number" placeholder="01" className="form-control" readOnly={readOnly} />
					</div>
					<div className="form-group col-xs-12 col-md-2 ">
						<label className="control-label">Ano</label>
						<Field name="year" component="input" type="number" placeholder="2017" className="form-control" readOnly={readOnly} />
					</div>
				</div>
				<div className="form-group">
					<div className="btn-group pull-right">
						<button className={`btn btn-sm btn-${this.props.classSubmit} m-t-n-xs`} type="submit">{this.props.labelSubmit}</button>
						<button className="btn btn-sm btn-default m-t-n-xs" type="button" onClick={this.props.init}>Cancelar</button>
					</div>
				</div>
			</form>
		)
	}
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)
