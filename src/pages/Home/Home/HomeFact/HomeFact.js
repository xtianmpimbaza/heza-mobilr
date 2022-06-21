import React from 'react';
import {Link} from 'react-router-dom';

const HomeFact = () => {
    return (
        <>
            <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="section-title pos-rel mb-45">
                                <div className="section-text section-text-white pos-rel">
                                    <h5>We are available 24/7</h5>
                                    <h1 className="white-color">We Always Ready to serve.</h1>
                                </div>
                            </div>
                            <div className="section-button section-button-left mb-30">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Get in
                                    touch</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-md-8">
                            <div className="cta-satisfied">
                                <div className="single-satisfied mb-50">
                                    <h1>7K+</h1>
                                    <h5><i className="fas fa-user"></i> Digital Rewards</h5>
                                    <p>
                                        Our three categories of rewards programme have allowed multiples businesses to give back to their customers in form incentives such as Airtime, data and reedemable digital vouchers.
                                    </p>
                                </div>
                                <div className="single-satisfied mb-50">
                                    <h1>100+</h1>
                                    <h5><i className="far fa-thumbs-up"></i> Companies</h5>
                                    <p>
                                        We have enabled many business enterprises give back to their customers through various
                                        digital gifts channels.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeFact;
