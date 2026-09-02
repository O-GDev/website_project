import React from 'react'
import { Link } from 'react-router-dom'

import Carousel from '../../components/ui/Carousel'
export default function Investments_details_2(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
        <div id="search-popup" className="search-popup">
            <div className="popup-inner">
                <div className="upper-box">
                    <figure className="logo-box"><Link to="/"><img src="assets/images/logo.png" alt="" /></Link></figure>
                    <div className="close-search"><i className="fas fa-times"></i></div>
                </div>
                <div className="overlay-layer"></div>
                <div className="auto-container">
                    <div className="search-form">
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" defaultValue="" placeholder="Type your keyword and hit" required  />
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 


        


        


        
        <section className="page-title">
            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/page-title.jpg)'}}></div>
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-32.png)'}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Multi Currency a/c</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>Services</li>
                        <li>Investments</li>
                        <li><span>Multi Currency a/c</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="secure-growth bg-color-1 sec-pad-3">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Trade FX</Link></h3>
                                <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-1.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Multi Currency a/c</Link></h3>
                                <p>Duty through weaknes will which is same as saying through...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-2.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Mutual Funds</Link></h3>
                                <p>Choice is when nothing prevents our being able to do...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-3.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Insurance</Link></h3>
                                <p>Choice is when nothing prevents our being able to do...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-4.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-188.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Tax-Deferred Investment</Link></h3>
                                <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-5.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-189.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                        <div className="growth-block-one">
                            <div className="inner-box">
                                <h3><Link to="/">Investment Advisory</Link></h3>
                                <p>Duty through weaknes will which is same as saying through...</p>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/growth-6.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-190.png" alt="" /></div>
                                </div>
                                <div className="link-box"><Link to="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="clients-section sec-pad centred">
            <div className="inner-container">
                <div className="sec-title">
                    <span className="sub-title">centred</span>
                    <h2>Trusted Corporate Partners</h2>
                </div>
                <Carousel className="six-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-1.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-2.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-3.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-4.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-5.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-6.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-1.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-2.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-3.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-4.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-5.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-6.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-1.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-2.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-3.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-4.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-5.png" alt="" /></Link></figure>
                    <figure className="clients-logo"><Link to="/index-2"><img src="assets/images/clients/clients-6.png" alt="" /></Link></figure>
                </Carousel>
            </div>
        </section>
        


        
        <section className="testimonial-style-two pt_90 pb_90">
            <div className="auto-container">
                <div className="inner-container p_relative">
                    <span className="big-text">testimonials</span>
                    <Carousel className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Highly Trustworthy</h3>
                                <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Fast Transactions</h3>
                                <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt="" /></figure>
                                    <h4>Dexter Clinton</h4>
                                    <span className="designation">Savings Account Holder,</span>
                                    <span className="text">California.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>User Friendly</h3>
                                <p>Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like flexibank.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt="" /></figure>
                                    <h4>Francis Emmet</h4>
                                    <span className="designation">Business Account Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
        


        



        
        <div className="scroll-to-top">
            <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
