import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeHeroSingleSlide = ({ bg_className}) => {
   const videoPopup = useGlobalContext();
   const {setIsOpen} = videoPopup
   return (
      <>
         <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                           {/*<h5>Reaward your clients with digital gifts.</h5>*/}
                           <h1 className="white-color">Reliable Digital Gifts.</h1>
                           <p className="text-warning">Start rewarding your clients today to show you care about their digital presence</p>
                        </div>
                        <div className="hero-slider-btn btn-sm">
                           <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>

                           {/*<button onClick={() => setIsOpen(true)}
                              className="play-btn popup-video"><i className="fas fa-play"></i></button>*/}

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;
