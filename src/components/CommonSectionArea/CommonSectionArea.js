import React from 'react';

const CommonSectionArea = ({area_header}) => {
    return (
        <>
            <section className="about-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            {area_header}
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about-right-side pt-55 mb-30">
                                <div className="about-title mb-20">
                                    <h3>Our Story</h3>
                                    {/*<h1>About Us</h1>*/}
                                </div>
                                <div className="about-text mb-50">

                                    <p>
                                    We are a team of experts with many years of experinence in IT and Telecommunications Industry with the thirst of solving business communications challenges using the existing technologies. We have a deep understanding of the market's needs, the shortcomings of established commercial technologies, and a robust vision for where things could be headed.
                                    </p>
                                    <p>
                                    Founded in 2022, with the idea of letting the customer think about the challenges of their business and we solve it in our making.
                                    </p>
                                    <p>
                                    Heza Mobile started as a telecom service integrator, building solutions on top of telecoms software. We also venture in integrating 3rd party OTT software like WhatsApp For Business to enhance business communication through the most used chat App in the world.
                                    </p>
                                    <p>
                                    In an attempt to overcome business Customer care communications deficiencies, we set out the idea to create a next generation Conversational API stack which enables more efficient business expansion within a market and grows the TAM for B2C business.
                                    </p>
                                    <p>
                                    Today we are working with a number of startup businesses, established financial institutions, insurance companies and NGOs around Africa, who offer their customer-base a scalable, user-friendly, effective omni-channel self-service solutions as well as an unimaginable Customer Experience while reducing business operations costs.
                                    </p>
                                </div>
                                <div className="our-destination">
                                    <div className="single-item mb-30">
                                        <div className="mv-icon f-left">
                                            <img src="img/about/destination-icon-1.png" alt=""/>
                                        </div>
                                        <div className="mv-title fix">
                                            <h3>Our Mission</h3>
                                            <p>To be the preferred communication solutions provider for innovators to provide unimaginable service experience to their customers.</p>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="mv-icon f-left">
                                            <img src="img/about/destination-icon-2.png" alt=""/>
                                        </div>
                                        <div className="mv-title fix">
                                            <h3>Our Vision</h3>
                                            <p>To enhance communications between businesses and their customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommonSectionArea;
