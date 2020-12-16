import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardText, Media} from 'reactstrap';



    //Creation of FUNCTIONAL COMPONENT 

    function RenderMenu({dish, onClick})
    {
        return(
            <Card>
                <CardImg width="100%" src={dish.image}></CardImg>
                <CardImgOverlay>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => { 
        const menu = props.dishes.map((dish) => {
            return(
                <RenderMenu dish={dish} onClick={props.onClick}/>
            );
        });

        return(
            <div className="container">
                <div className="row'">
                    <div className="col-12 col-md-5">
                        {menu}
                    </div>
                </div>
            </div>
        );
    }

        

        /*return(
            <div class="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );*/
export default Menu;