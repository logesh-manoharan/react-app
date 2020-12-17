import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Col, Button, Card, CardHeader, CardBody, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component{

    constructor(props){
        super(props);
        // name of the input element = name of the element inside the state 
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            emailid: '',
            agree: false,
            contactType: 'telno.',
            feedback: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                emailid: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;   //store the value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state: '+JSON.stringify(this.state));
        alert('Current state: '+JSON.stringify(this.state));
        event.preventDefault();  
        //preventDefault() method's purpose is after submitting and clicking OK in ALERT box 'entered details will remain in that INPUT ELEMENT'
    }

    //this method is to identify where we touch
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(firstname, lastname, telnum, emailid) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            emailid: ''
        }

        if(this.state.touched.firstname && firstname.length == 0){
            errors.firstname = 'First Name should not be EMPTY, ';
        }
        if(this.state.touched.firstname && (firstname.length < 3 || firstname.length > 10)){
            errors.firstname += 'First Name should contains > 3 and < 10Letters';
        }

        if(this.state.touched.lastname && lastname.length == 0){
            errors.lastname = 'Last Name should not be EMPTY, ';
        }
        if(this.state.touched.lastname && (lastname.length < 3 || lastname.length > 10)){
            errors.lastname += 'Last Name should contains > 3 and < 10 Letters';
        }

        const reg = /^\d+$/;

        if(this.state.touched.telnum && telnum.length == 0){
            errors.telnum = 'Tel no. should not be EMPTY, ';
        }
        if(this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum += 'Telnum should only be the Numbers';
        }

        if(this.state.touched.emailid && emailid.length == 0){
            errors.emailid = 'Email ID should not be EMPTY, ';
        }
        if(this.state.touched.emailid && emailid.split('').filter(x => x === '@').length !== 1) {
            errors.emailid += 'Emailid should contain @ symbol';
        }


        return errors;
    }
    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.emailid);

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
    
                <Card className="justify-content-center">
                    <CardHeader className="bg-warning text-white">
                        <h4>Send us feedback</h4>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                    value={this.state.firstname} 
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                    value={this.state.lastname} 
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Tel no.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel Number"
                                    value={this.state.telnum} 
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Label htmlFor="emailid" md={2}>Email ID</Label>
                                <Col md={10}>
                                    <Input type="email" id="emailid" name="emailid" placeholder="Email ID"
                                    value={this.state.emailid} 
                                    valid={errors.emailid === ''}
                                    invalid={errors.emailid !== ''}
                                    onBlur={this.handleBlur('emailid')}
                                    onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.emailid}</FormFeedback>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" 
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange}/>
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
    
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" id="contactType" name="contactType"value={this.state.contactType}
                                    onChange={this.handleInputChange} >
                                        <option>telno.</option>
                                        <option>Email Id</option>
                                    </Input>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback" placeholder="Enter your Feedback..."
                                    value={this.state.feedback}
                                    onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
    
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary"><i className="fa fa-paper-plane fa-lg"></i> Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
                
            </div>
        );
    }
}

export default Contact;
