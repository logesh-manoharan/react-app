import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Dish from './DishComponent';

import Home from './HomeComponent';
import Comment from './CommentsComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import {addComment} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
//going to dispatch() the action(javascript obj) which is created by ActionCreators
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishid, rating, author, comment) => dispatch(addComment(dishid, rating, author, comment))
});

class Main extends Component{
    constructor(props){
        super(props);
    }

    selectDish(dishId)
    {
        this.setState({selectedDish: dishId});
    }

    render(){

        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
                />
            );
        }

        const MenuPage = () => {
            return(
                <Menu dishes={this.props.dishes}/>
            );
        }

        const ContactPage = () => {
            return(
                <Contact />
            );
        }

        const AboutPage = () => {
            return(
                <About leaders={this.props.leaders}/>
            );
        }
        const DishWithId = ({match}) => {
            //[0] return the first value
            return(
                <Dish dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                      comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                      addComment={this.props.addComment}/>
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={MenuPage}/>
                    <Route exact path="/contactus" component={ContactPage}/>
                    <Route exact path="/aboutus" component={AboutPage}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));