import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse} from 'reactstrap';

class Header extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            isNavOpen: false
        };
    }

    

    render() {
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={() => {
                                    this.setState({isNavOpen: !this.state.isNavOpen})
                                }
                            }/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"/>
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>

                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About
                                    </NavLink>
                                </NavItem>

                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>

                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h3>Ristornate Con Fusion</h3>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }

}

export default Header;