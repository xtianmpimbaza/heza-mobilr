import React from 'react';
import {Link} from 'react-router-dom';
import HomeSingleFooterBlog from '../HomeSingleFooterBlog/HomeSingleFooterBlog';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
                    <div className="container">
                        <div className="row align-items-center" style={{position: 'relative', zIndex: '9999'}}>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-contact-info footer-contact-info-3 mb-40">
                                    {/*<div className="footer-logo mb-35">*/}
                                    {/*    <Link to="/"><img src="img/logo/heza-mobile-footer.png" alt="Heza logo"/></Link>*/}
                                    {/*</div>*/}
                                    <div className="footer-contact-content mb-25">
                                        <p>
                                        We are a Communication Platform as a Service (CPaaS) that lets existing business software interact with and incentivise their customers using prefered APIs channels   — like SMS, Airtime & Data, USSD, and Verification.
                                        </p>
                                        <div className="header-social-icons f-left d-none d-xl-block">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        {/*<div>*/}
                                        {/*    <ul>*/}
                                        {/*        <li>*/}
                                        {/*            /!*<a href="#"><i className="far fa-envelope" className="white-color"></i></a> &nbsp;*!/*/}
                                        {/*            <i className="fas fa-facebook"></i>*/}
                                        {/*        </li>*/}
                                        {/*    </ul>*/}

                                        {/*</div>*/}
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h3>Links</h3>
                                    </div>
                                    <div className="footer-menu footer-menu-2">
                                        <ul>
                                            <li><Link to="/">Products</Link></li>
                                            <li><Link to="/about">Company</Link></li>
                                            <li><Link to="#">Usecases</Link></li>
                                            <li><Link to="/services">Developers</Link></li>
                                            <li><Link to="/contact">Contact us</Link></li>
                                            {/*<li><Link to="/servicesDetails">Appoinment</Link></li>*/}
                                            <li><Link to="/#">Blog</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title">
                                        <h3>Contact</h3>
                                    </div>

                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>hello@hezamobile.com</li>
                                            <li><i className="far fa-globe"></i>www.hezamobile.com</li>
                                            <li><i className="far fa-map"></i>Kansanga, Kampala Uganda</li>
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
                                <div className="footer-copyright footer-copyright-3 text-center">
                                    <p className="white-color">Copyright &copy; 2022 Heza Mobile &nbsp;| &nbsp; Powered by &nbsp;
                                         <a href="https://autosoftug.com/" target="_blank" className="white-color" >Autosoft</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
