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
import { actions } from 'react-redux-form';
import {addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';

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
    addComment: (dishid, rating, author, comment) => dispatch(addComment(dishid, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

class Main extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    selectDish(dishId)
    {
        this.setState({selectedDish: dishId});
    }

    render(){

        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess} 
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
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
                <Dish dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                    />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={MenuPage}/>
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
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