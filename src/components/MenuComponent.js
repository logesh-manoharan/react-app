import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,
        BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';

    //Creation of FUNCTIONAL COMPONENT 

    function RenderMenu({dish, onClick})
    {
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => { 
            if(props.dishes.isLoading) {
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if(props.dishes.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4>{props.dishes.errMess}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
    
                    
                const menu = props.dishes.dishes.map((dish) => {
                    return(
                        <RenderMenu dish={dish} onClick={props.onClick}/>
                    );
                
                });

                return(
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="row'">
                            <div className="col-12 col-md-5">
                                {menu}
                            </div>
                        </div>
                    </div>
                );
            }
        }
    

        

        /*return(
            <div class="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );*/
export default Menu;