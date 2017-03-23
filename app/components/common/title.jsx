import React from 'react'

export default props => (
    <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-12">
            <h2>{props.title}</h2>
            <ol className="breadcrumb">
                <li className="active">
                    <strong>{props.subTitle}</strong>
                </li>
            </ol>
        </div>
    </div>
)