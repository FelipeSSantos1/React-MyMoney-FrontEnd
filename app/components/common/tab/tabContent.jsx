import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const mapStateToProps = state => ({tab: state.tab})

class TabContent extends Component {
	render (){
		const selected = this.props.tab.selected === this.props.id

		if(this.props.tab.visible[this.props.id]){
			return(
				<div id={this.props.id} className={`tab-pane${selected ? ' active' : ''}`}>
					<div className="panel-body">
						{this.props.children}
					</div>
				</div>
			)
		}else{
			return <span></span>
		}
	}

}

export default connect(mapStateToProps)(TabContent)