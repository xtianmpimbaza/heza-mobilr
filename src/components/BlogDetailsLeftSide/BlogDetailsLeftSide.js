import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetailsLeftSide = ({details_topBar}) => {
    return (
        <>
            <div className="col-lg-8">
                <article className="postbox post format-image mb-40">

                    {details_topBar}
                    <div className="postbox__text bg-none">
                        <div className="post-meta mb-15">
                            <span><i className="far fa-calendar-check"></i> September 15, 2021 </span>
                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Diboli B. Joly</Link></span>
                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> 23 Comments</Link></span>
                        </div>
                        <h3 className="blog-title">
                            If you find yourself constantly bookmarking health sections on news.
                        </h3>
                        <div className="post-text mb-20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo.</p>
                            <p>Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum. Sed ut perspiciatis
                                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab
                                illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem.</p>
                            <blockquote>
                                <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                <footer>- Rosalina Pong</footer>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>

                            <div className="blog-inner-img mb-30 mt-30">
                                <img src="img/blog/b6.jpg" alt="blog img"/>
                            </div>

                            <div className="inner-content">
                                <h4>A cleansing hot shower or bath</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur
                                    sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                            <div className="inner-content">
                                <h4>Setting the mood with incense</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur
                                    sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                            </div>
                        </div>

                    </div>


                    {/*<div className="post-comments-form">*/}
                    {/*    <div className="post-comments-title">*/}
                    {/*        <h2>Post Comments</h2>*/}
                    {/*    </div>*/}
                    {/*    <form id="contacts-form" className="conatct-post-form" action="#">*/}
                    {/*        <div className="row">*/}
                    {/*            <div className="col-xl-12">*/}
                    {/*                <div className="contact-icon contacts-message">*/}
                    {/*                    <textarea name="comments" id="comments" cols="30" rows="10"*/}
                    {/*                        placeholder="Your Comments...."></textarea>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-xl-12">*/}
                    {/*                <div className="contact-icon contacts-name">*/}
                    {/*                    <input type="text" placeholder="Your Name.... "/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-xl-12">*/}
                    {/*                <div className="contact-icon contacts-email">*/}
                    {/*                    <input type="email" placeholder="Your Email...."/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-xl-12">*/}
                    {/*                <div className="contact-icon contacts-website">*/}
                    {/*                    <input type="text" placeholder="Your Website...."/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-xl-12">*/}
                    {/*                <button className="primary_btn theme-btn" type="submit">Post comment</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}

                </article>
            </div>
        </>
    );
};

export default BlogDetailsLeftSide;
