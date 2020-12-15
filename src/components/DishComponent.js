import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

class Dish extends Component{
    render(){
        return(
            <Card>
                <CardImg top src={this.props.dish.image}></CardImg>
                <CardBody>
                    <CardTitle>
                        {this.props.dish.name}
                    </CardTitle>
                    <CardText>  
                        {this.props.dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    };
}

export default Dish;
