import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Label, Col, Button, Card, CardHeader, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors, actions} from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNum = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component{

    constructor(props){
        super(props);
        // name of the input element = name of the element inside the state 
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log('Current state: '+JSON.stringify(values));
        alert('Current state: '+JSON.stringify(values));
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.emailid, values.message);
        //preventDefault() method's purpose is after submitting and clicking OK in ALERT box 'entered details will remain in that INPUT ELEMENT'
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active> Contact</BreadcrumbItem>
                        </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                </div><br />

                <Card>
                    <CardHeader className="bg-warning text-white">
                        <h4>Send us feedback</h4>
                    </CardHeader>

                    <CardBody>
                        <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name"
                                    className="form-control"
                                    validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Please fill out this field',
                                            minLength: 'Number of Characters should be >=3',
                                            maxLength: 'Number of Characters should be <=15'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name"
                                    className="form-control"
                                    validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Please fill out this field',
                                            minLength: 'Number of Characters should be >=3',
                                            maxLength: 'Number of Characters should be <=15'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Tel no.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel Number"
                                    className="form-control"
                                    validators={{required, isNum, minLength: minLength(6), maxLength: maxLength(10)}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Please fill out this field',
                                            isNum: 'Please enter only the NUMERIC Values',
                                            minLength: 'Tel number should have atleast 6 digits',
                                            maxLength: 'Tel number should be <= 10 digits'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="emailid" md={2}>Email ID</Label>
                                <Col md={10}>
                                    <Control.text model=".emailid" id="emailid" name="emailid" placeholder="Email ID"
                                    className="form-control"
                                    validators={{required, validEmail}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".emailid"
                                        show="touched"
                                        messages={{
                                            required: 'Please fill out this field',
                                            validEmail: 'Please enter the VALID EMAILID'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <Row check>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" 
                                            className="form-control"/>
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </Row>
                                </Col>

                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" id="contactType" name="contactType" className="form-control">
                                        <option>telno.</option>
                                        <option>Email Id</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" placeholder="Enter your Feedback..."
                                    className="form-control"></Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary"><i className="fa fa-paper-plane fa-lg"></i> Send Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </CardBody>
                </Card>
                
            </div>
        );
    }
}

export default Contact;
