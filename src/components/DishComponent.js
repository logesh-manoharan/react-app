import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, Button, CardFooter, Row, Col, Label, Modal, ModalHeader,
ModalBody } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';

import { baseurl } from '../shared/baseurl';

const required = (val) => val && val.length; 
const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len); 

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-7 m-1">
            <Card>
                <CardImg top src={baseurl + dish.image}></CardImg>
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
    );
}

function RenderComments({comments, addComment, dishId}) {
    if(comments != null) {
        return(
            <div className="col-12 col-md-3 m-1">
                <h6>Comments: </h6>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author} {comment.date}</p>
                            </li>
                        );
                    })}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );    
    }
    else {
        return(
            <div></div>
        );
    }
}

function Dish(props) {
    if(props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    else if(props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />

                    <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    dishId = {props.dish.id}/>
                </div>
            </div>
        );
    }
    else {
        return(<div></div>);
    }
}


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return(
            <>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-warning text-white" toggle={this.toggleModal}>
                        <h3>Submit Comment</h3>
                    </ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
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
                                <Label md={2} htmlFor="author">Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" 
                                    id="author"
                                    name="author"
                                    className="form-control"
                                    validators={{required, minLength: minLength(2), maxLength: maxLength(15)}}/>

                                    <Errors className="text-danger"
                                    model=".author"
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
