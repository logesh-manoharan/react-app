import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, CardFooter } from 'reactstrap';

function RenderDish({dish, comment})
{
    return(
        <>
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
            </div>
        </>
    );
}

const Dish = (props) => {
    return(
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} comment={props.comment}/>
            </div>
        </div>
    );
}


export default Dish;
