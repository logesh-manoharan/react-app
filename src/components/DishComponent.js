import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

function RenderDish({dish})
{
    return(
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
    );
}

const Dish = (props) => {
    const dish = props.dish.map((dish) => {
        return(
            <RenderDish dish={dish}/>
        );
    })
    return(
        dish
    );
}


export default Dish;
