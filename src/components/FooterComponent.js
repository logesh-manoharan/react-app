import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <div className="footer">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-md-2">
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-4 col-sm-5">
                    <div>
                        <h5>Our Address: </h5>
                        <address>
                            6/311, Muthamil Street
                            VVV College Opposite
                            Virudhunagar - 626001
                        </address>
                        <i className="fa fa-phone fa-lg"></i>: 9080311157 <br />
                        <i className="fa fa-envelope fa-lg"></i>: logeshlogu189@gmail.com <br />
                    </div>
                </div>

                <div className="col-4 col-sm-4">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="www.google.com">
                            <i className="fa fa-google-plus fa-lg"></i>
                        </a>

                        <a className="btn btn-social-icon btn-facebook" href="www.facebook.com">
                            <i className="fa fa-facebook fa-lg"></i>
                        </a>

                        <a className="btn btn-social-icon btn-twitter" href="www.twitter.com">
                            <i className="fa fa-twitter fa-lg"></i>
                        </a>

                        <a className="btn btn-social-icon btn-google" href="www.mail.google.com">
                            <i className="fa fa-envelope fa-lg"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
        </div>
    );
}

export default Footer;