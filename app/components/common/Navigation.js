import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {
    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav id="navbar-default" className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element">
                            <span>
                                <img alt="image" className="img-circle" src="img/imgProfile.png" />
                            </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear">
                                    <span className="block m-t-xs"><strong className="font-bold">Felipe S. Santos</strong></span>
                                    <span className="text-muted text-xs block">Developer<b className="caret"></b></span>
                                </span>
                            </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#"><i className="fa fa-id-card-o"></i>  Profile</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            FSS+
                        </div>
                    </li>

                    <li className={this.activeRoute("/dashboard")}>
                        <Link to="/dashboard"><i className="fa fa-dashboard"></i> <span className="nav-label">Dashboard</span></Link>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-edit"></i> <span className="nav-label">Cadastros</span><span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level collapse">
                            <li>
                                <Link to="/billingCycle"><i className="fa fa-dollar"></i> <span className="nav-label">Ciclo de Pagamentos</span></Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navigation