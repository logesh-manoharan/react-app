import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dish from './DishComponent';
import Comment from './CommentsComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    selectDish(dishId)
    {
        this.setState({selectedDish: dishId});
    }

    render(){
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand>Ristornate Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick = {(dishId) => this.selectDish(dishId)}/>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Dish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
                        </div>  
                        <div className="col-12 col-md-5">
                            <h3>Comments: </h3>
                            <Comment dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;