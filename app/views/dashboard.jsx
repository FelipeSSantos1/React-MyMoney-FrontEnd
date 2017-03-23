import React, { Component } from 'react'
import {connect} from 'react-redux'

import Title from '../components/common/title'
import Box from '../components/common/boxResumo'
import Grid from '../components/common/grid'

const mapStateToProps = state => ({summary: state.dashboard.summary})

class Dashboard extends Component{

    render(){

        const {debt, credit} = this.props.summary

        return(
            <div>
                <Title title="Dashboard" subTitle="Resumo Consolidado" />
                <div className="wrapper wrapper-content animated fadeIn">
                    <div className="row">
                        <Grid cols="12 4"><Box valor={debt} desc='Débitos' icon='minus-circle' bgColor='red' /></Grid>
                        <Grid cols="12 4"><Box valor={credit} desc='Créditos' icon='plus-circle' bgColor='navy' /></Grid>
                        <Grid cols="12 4"><Box valor={credit - debt} desc='Total Consolidado' icon='bank' bgColor='black' /></Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Dashboard)