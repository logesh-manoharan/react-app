import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import Dish from './DishComponent';

import Home from './HomeComponent';
import Comment from './CommentsComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
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
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
                />
            );
        }

        const MenuPage = () => {
            return(
                <Menu dishes={this.state.dishes}/>
            );
        }

        const ContactPage = () => {
            return(
                <Contact />
            );
        }

        const DishWithId = ({match}) => {
            //[0] return the first value
            return(
                <Dish dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                      comment={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}/>
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={MenuPage}/>
                    <Route exact path="/contactus" component={ContactPage}/>
                    <Route exact path='/menu/:dishId' component={DishWithId} />
                    <Redirect to="/home"/> 
                </Switch>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            
                        </div>  
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Main;