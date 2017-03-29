import React, {Component} from 'react'

class billingCycleList extends Component{

	render(){
		return(
			<div>
				<table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td><svg className="peity" height="16" width="32"><polygon fill="#1ab394" points="0 9.375 0 0.5 3.5555555555555554 4.25 7.111111111111111 6.125 10.666666666666666 11.75 14.222222222222221 15.5 17.77777777777778 13.625 21.333333333333332 6.125 24.888888888888886 4.25 28.444444444444443 0.5 32 6.125 32 9.375"></polygon><polyline fill="transparent" points="0 0.5 3.5555555555555554 4.25 7.111111111111111 6.125 10.666666666666666 11.75 14.222222222222221 15.5 17.77777777777778 13.625 21.333333333333332 6.125 24.888888888888886 4.25 28.444444444444443 0.5 32 6.125" stroke="#169c81" strokeWidth="1" strokeLinecap="square"></polyline></svg></td>
                        <td>Samantha</td>
                        <td className="text-navy"> <i className="fa fa-level-up"></i> 40% </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><svg className="peity" height="16" width="32"><polygon fill="#1ab394" points="0 15 0 0.166666666666666 3.5555555555555554 10.5 7.111111111111111 0.5 10.666666666666666 5.5 14.222222222222221 7.166666666666666 17.77777777777778 0.5 21.333333333333332 3.833333333333332 24.888888888888886 10.5 28.444444444444443 7.166666666666666 32 12.166666666666666 32 15"></polygon><polyline fill="transparent" points="0 7.166666666666666 3.5555555555555554 10.5 7.111111111111111 0.5 10.666666666666666 5.5 14.222222222222221 7.166666666666666 17.77777777777778 0.5 21.333333333333332 3.833333333333332 24.888888888888886 10.5 28.444444444444443 7.166666666666666 32 12.166666666666666" stroke="#169c81" strokeWidth="1" strokeLinecap="square"></polyline></svg></td>
                        <td>Jacob</td>
                        <td className="text-warning"> <i className="fa fa-level-down"></i> -20% </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><svg className="peity" height="16" width="32"><polygon fill="#1ab394" points="0 15 0 13.833333333333334 3.2 5.5 6.4 10.5 9.600000000000001 0.5 12.8 7.166666666666666 16 0.5 19.200000000000003 7.166666666666666 22.400000000000002 10.5 25.6 0.5 28.8 5.5 32 8.833333333333332 32 15"></polygon><polyline fill="transparent" points="0 13.833333333333334 3.2 5.5 6.4 10.5 9.600000000000001 0.5 12.8 7.166666666666666 16 0.5 19.200000000000003 7.166666666666666 22.400000000000002 10.5 25.6 0.5 28.8 5.5 32 8.833333333333332" stroke="#169c81" strokeWidth="1" strokeLinecap="square"></polyline></svg></td>
                        <td>Damien</td>
                        <td className="text-navy"> <i className="fa fa-level-up"></i> 26% </td>
                    </tr>
                    </tbody>
                </table>
			</div>
		)
	}
}

export default billingCycleList