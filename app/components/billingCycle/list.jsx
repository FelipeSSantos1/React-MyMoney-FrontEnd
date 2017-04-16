import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete} from 'actions/billingCycle'

class billingCycleList extends Component{

    componentWillMount() {
        this.props.getList()
    }
    /**
     * Renderiza as linhas da tabela com os dados do objeto retornado pelo getList
     * @return {[type]} [description]
     */
    renderRows(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning btn-xs" type="button" onClick={() => this.props.showUpdate(bc)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger btn-xs" type="button" onClick={() => this.props.showDelete(bc)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ))
    }

	render(){
		return(
			<div>
				<table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="colAction">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
			</div>
		)
	}
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billingCycleList)
