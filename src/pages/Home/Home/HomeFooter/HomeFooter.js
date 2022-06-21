import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    {/*<div className="emmergency-call fix">*/}
                                        {/*<div className="emmergency-call-icon f-left">*/}
                                        {/*    <i className="fas fa-phone"></i>*/}
                                        {/*</div>*/}
                                        {/*<div className="emmergency-call-text f-left">*/}
                                        {/*    <h6>Phone number</h6>*/}
                                        {/*    <span>+256 706 948 908</span>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/footer-logo.png" alt=""/></Link>
                                    </div>

                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>hello@hezamobile.com</li>
                                            <li><i className="far fa-clone"></i>hezamobile.com</li>
                                            <li><i className="far fa-flag"></i>Kansanga, Kampala, Uganda</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Socials</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            {/*<li><Link to="/">Facebook</Link></li>*/}
                                            <li><Link to="/">Twiter</Link></li>
                                            <li><Link to="/">Linkedin</Link></li>
                                            {/*<li><Link to="/">Instagram</Link></li>*/}
                                            {/*<li><Link to="/servicesDetails">Pediatrics</Link></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Products</Link></li>
                                            <li><Link to="/about">Usecases</Link></li>
                                            <li><Link to="/contact">Company</Link></li>
                                            <li><Link to="/services">Solutions</Link></li>
                                            {/*<li><Link to="/">Blog</Link></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">© Copyright 2022 Heza Mobile. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;
