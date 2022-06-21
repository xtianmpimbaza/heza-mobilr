import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel home_ser_title">
                           {/*<h5>Services</h5>*/}
                           <h1>Our Services</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <HomeSIngleService icon="1" title="SMS sales" />
                  <HomeSIngleService icon="2" title="Mobile internet" />
                  <HomeSIngleService icon="3" title="Mobile talktime" />
                  {/*<HomeSIngleService icon="4" title="Blood Cancer" />*/}
                  {/*<HomeSIngleService icon="5" title="Neurology Sargery" />*/}
                  {/*<HomeSIngleService icon="6" title="Allergic Issue" />*/}

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;
