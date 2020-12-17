import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem, Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse,
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class Header extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }    

    handleLogin(event){
        this.toggleModal();

        alert("Username: "+this.username.value+"Password: "+this.password.value+"Remember: "+this.remember.value);
        event.preventDefault();
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

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-warning text-white" toggle={this.toggleModal}>Login</ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username" md={2}>Username</Label>
                                <div className="col-md-10">
                                    <Input type="text" placeholder="Username" id="username" name="username"
                                    innerRef={(input) => this.username = input}/>
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <div className="col-md-10">
                                    <Input type="password" placeholder="Password" id="password" name="password"
                                    innerRef={(input) => this.password = input}/>
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <Label check>
                                    <div className="offset-md-2 col-md-10">
                                        <Input type="checkbox" id="remember" name="remember"
                                        innerRef={(input) => this.remember = input}/> Remember me
                                    </div>
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <div className="offset-md-2 col-md-6">
                                    <Button type="submit" className="bg-primary">
                                        <i className="fa fa-sign-in fa-lg"></i> Login
                                    </Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }

}

export default Header;