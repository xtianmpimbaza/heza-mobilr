import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-area pt-120 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-envelope"></i>
                                <h3>Business</h3>
                                <p>hello@hezamobile.com</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Visit Us</h3>
                                <p>P.O Box 970003, Kansanga, Kampala, Uganda</p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-envelope"></i>
                                <h3>Customer Support</h3>
                                <p>support@hezamobile.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;
