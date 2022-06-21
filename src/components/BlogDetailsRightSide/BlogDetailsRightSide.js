import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetailsRightSide = () => {
    return (
        <>
            <div className="col-lg-4">

                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Popular Blogs</h3>
                    </div>
                    <ul className="recent-posts">
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img1.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 18, 2021 </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img2.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 24, 2021 </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-posts-image">
                                <Link to="/blogDetails"><img src="img/blog/details/img3.jpg" alt=""/></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link to="/blogDetails">Lorem ipsum dolor sit
                                    cing elit, sed do.</Link></h6>
                                <div className="widget-posts-meta">October 28, 2021 </div>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Social Profile</h3>
                    </div>
                    <div className="social-profile">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BlogDetailsRightSide;
