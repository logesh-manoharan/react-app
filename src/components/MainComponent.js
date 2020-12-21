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
import {postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

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
    postComment: (dishId, rating, author, comment) => {dispatch(postComment(dishId, rating, author, comment))},
    postFeedback: (firstname, lastname, telnum, emailid, feedback) => {dispatch(postFeedback(firstname, lastname, telnum, emailid, feedback))},
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
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
        this.props.fetchLeaders();
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
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderLoading={this.props.leaders.isLoading}
                    leaderErrMess={this.props.leaders.errMess}
                />
            );
        }

        const MenuPage = () => {
            return(
                <Menu dishes={this.props.dishes}/>
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
                    postComment={this.props.postComment}
                    />
            );
        }

        return(
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            <Route exact path="/menu" component={MenuPage}/>
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>}/>
                            <Route exact path="/aboutus" component={AboutPage}/>
                            <Route exact path='/menu/:dishId' component={DishWithId} />
                            <Redirect to="/home"/> 
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

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