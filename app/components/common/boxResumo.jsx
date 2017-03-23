import React from 'react'

export default props => (
	<div className={"widget "+props.bgColor+"-bg p-lg text-center"}>
        <div className="m-b-md">
            <i className={"fa fa-"+props.icon+" fa-4x"}></i>
            <h1 className="m-xs">R$ {props.valor}</h1>
            <h3 className="font-bold no-margins">
                {props.desc}
            </h3>
        </div>
    </div>
)