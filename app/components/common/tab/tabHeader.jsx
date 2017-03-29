import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTab} from 'actions/tab'

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

class TabHeader extends Component {

	render (){
		const selected = this.props.tab.selected === this.props.target

		if(this.props.tab.visible[this.props.target]){
			return(
				<li className={selected ? 'active' : ''}>
					<a data-toggle="tab" href="#void" 
					onClick={() => this.props.selectTab(this.props.target)} aria-expanded={selected}>
						<i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
					</a>
				</li>
			)
		}else{
			return <span></span>
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)