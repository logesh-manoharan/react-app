import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText, Media} from 'reactstrap';
import Dish from './DishComponent';
class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedCard: null
        }
    }

    selectDish(dish)
    {
        this.setState({selectedCard: dish});
    }

    renderDish(dish)
    {

        if(dish != null)
        {
            return(
                <Dish dish={dish}/>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish != null)
        {   
            const comments = dish.comments.map((dd) => {
                return(
                    <div>
                        <p>
                            {dd.comment}
                        </p> 
                        <p>
                            -- {dd.author}
                            {dd.date}
                        </p>
                        <br></br>
                    </div>
                );
            });

            return(
                comments
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick = {() => this.selectDish(dish)}>
                        <CardImg width="100%" src={dish.image}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        

        return(
            <div class="container">
                <div className="row">
                    {menu}
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedCard)}
                    </div>
                    <div className="col-12 col-md-5">
                        <h3>Comments</h3>
                        {this.renderComments(this.state.selectedCard)}
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;