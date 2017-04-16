import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Title from 'components/common/title'
import Grid from 'components/common/grid'
import Tabs from 'components/common/tab/tabs'
import TabContents from 'components/common/tab/tabContents'
import TabContent from 'components/common/tab/tabContent'
import TabHeaders from 'components/common/tab/tabHeaders'
import TabHeader from 'components/common/tab/tabHeader'
import List from 'components/billingCycle/list'
import Form from 'components/billingCycle/formCRUD'

import {selectTab, showTabs} from 'actions/tab'
import {create, update, remove} from 'actions/billingCycle'

class BillingCycle extends Component{

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        
        return(
            <div>
                <Title title="Ciclos de Pagamentos" subTitle="Cadastro" />
                <div className="wrapper wrapper-content animated fadeIn">
                    <Tabs>
					    <TabHeaders>
					    	<TabHeader label="Listar" icon="bars" target="tabList" />
					    	<TabHeader label="Incluir" icon="plus" target="tabCreate" />
					    	<TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
					    	<TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
					    </TabHeaders>
					    <TabContents>
					    
					    	<TabContent id="tabList">
					    		<List />
					    	</TabContent>
					                
					        <TabContent id="tabCreate">
				                <Form onSubmit={this.props.create} labelSubmit="Salvar" classSubmit="primary" />
					        </TabContent>

					        <TabContent id="tabUpdate">
				                <Form onSubmit={this.props.update} labelSubmit="Alterar" classSubmit="primary" />
					        </TabContent>

					        <TabContent id="tabDelete">
				                <Form onSubmit={this.props.remove} labelSubmit="Excluir" classSubmit="danger" readOnly={true} />
					        </TabContent>

					    </TabContents>
					</Tabs>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)


