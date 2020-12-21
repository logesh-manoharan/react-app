import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardHeader, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseurl} from '../shared/baseurl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';

function About(props) {
    const leader = props.leaders.leaders.map((leader) => {
        return(
            <>
                <Stagger in>
                    <Fade in enterOpacity={0.85} exitOpacity={0.25}>
                        <div className="row row-content">
                            <div className="col-12 col-md-2">
                                <img src={baseurl + leader.image} />
                            </div>

                            <div className="col-12 col-md-10">
                                    <h6>{leader.name}</h6>
                                    <p>{leader.designation}</p> <br />
                                    <p>{leader.description}</p>
                            </div>
                        </div>
                    </Fade>
                </Stagger>
            </>
        );
    });
    return(
        <div className="container">
            <div className="row">
                <h3>Aboutus</h3>
            </div>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Aboutus</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12 col-sm-7">
                    <h5>Our Histroy</h5> <br />
                    <p>
                        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon 
                        par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be 
                        found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring 
                        four of the best three-star Michelin chefs in the world, you never know what will arrive on 
                        your plate the next time you visit us.
                    </p>

                    <p>
                        The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a 
                        successful chain started by our CEO, Mr. Peter Pan, that featured for the first 
                        time the world's best cuisines in a pan.
                    </p>
                </div>
                <div className="col-12 col-sm-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            Facts at a Glance
                        </CardHeader>

                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 mt-2">
                    <blockquote className="blockquote">
                        <Card className="bg-faded">
                            <CardBody>
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">
                                    Yogi Berra, 
                                    <cite title="Source Title">
                                        The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014
                                    </cite>
                                </footer>
                            </CardBody>
                        </Card>
                    </blockquote>       
                </div>
            </div>

            <div className="row row-header">
                <h3>Corporate Leadership</h3>
            </div>

            {leader}
        </div>
    );
}

export default About;