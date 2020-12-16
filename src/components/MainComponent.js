import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Dish from './DishComponent';

import Home from './HomeComponent';
import Comment from './CommentsComponent';
import {DISHES} from '../shared/dishes';

import { Switch, Route, Redirect } from 'react-router-dom';

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

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const MenuPage = () => {
            return(
                <Menu dishes={this.state.dishes}/>
            );
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={MenuPage}/>
                    <Redirect to="/home"/> 
                </Switch>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Dish dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
                        </div>  
                        <div className="col-12 col-md-5">
                            <Comment dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Main;