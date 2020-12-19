import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, Button, CardFooter, Row, Col, Label, Modal, ModalHeader,
ModalBody } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length; 
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len); 

class Dish extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        const dish = this.props.dish;
        const comment = this.props.comment;
        return(
            <>
                <div className="row">
                    <div className="col-12 col-md-7 m-1">
                        <Card>
                            <CardImg top src={dish.image}></CardImg>
                            <CardBody>
                                <CardTitle>
                                    {dish.name}
                                </CardTitle>
                                <CardText>  
                                    {dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-3 m-1">
                        <h6>Comments: </h6>
                        {comment.comment}
                        <div className="row">
                            <div className="offset-md-2 col-md-5">
                                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-warning text-white" toggle={this.toggleModal}>
                        <h3>Submit Comment</h3>
                    </ModalHeader>

                    <ModalBody>
                        <LocalForm>
                            <Row className="form-group">
                                <Label md={2} htmlFor="rating">Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating"
                                    id="rating"
                                    name="rating"
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={2} htmlFor="name">Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" 
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    validators={{required, minLength: minLength(2), maxLength: maxLength(15)}}/>

                                    <Errors className="text-danger"
                                    model=".name"
                                    show="touched" 
                                    messages={{
                                        required: 'Please fill your name',
                                        minLength: 'Length of the name should be >=2',
                                        maxLength: 'Length of the name should be <=15'
                                    }}/>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={2} htmlFor="comment">Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment"  
                                    id="comment"
                                    name="comment"
                                    className="form-control"
                                    validators={{required}}/>
                                    <Errors className="text-danger" 
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: 'Please add some comments'
                                    }}/>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <div className="col-md-3">
                                    <Button className="bg-primary text-white">Submit</Button>
                                </div>
                            </Row>


                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Dish;
