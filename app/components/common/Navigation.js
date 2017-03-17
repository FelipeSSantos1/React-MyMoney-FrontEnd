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
                            <ul className="dropdown-menu animated bounceIn m-t-xs">
                                <li><a href="#"><i className="fa fa-id-card-o"></i>  Profile</a></li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            FSS+
                        </div>
                    </li>

                    <li className={this.activeRoute("/app")}>
                        <a href="#"><i className="fa fa-th"></i> <span className="nav-label">Apps</span><span className="pull-right badge badge-success">2</span><span className="fa arrow">&nbsp;</span></a>
                        <ul className={this.secondLevelActive("/app")}>
                            <li className={this.activeRoute("/appTodo")}>
                                <Link to="/appTodo"><i className="fa fa-check-square-o"></i> <span className="nav-label">ToDo</span></Link>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-money"></i> <span className="nav-label">My Money</span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level">
                                    <li className={this.activeRoute("/appDashboard")}>
                                        <Link to="/appDashboard"><span className="nav-label">Dashboard</span></Link>
                                    </li>
                                    <li className={this.activeRoute("/appBillingCycle")}>
                                        <Link to="/appBillingCycle"><span className="nav-label">Pagamentos</span></Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navigation