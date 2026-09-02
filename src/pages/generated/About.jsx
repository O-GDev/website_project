import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
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
                    <h1>About Us</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>About Us</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="about-section pt_110 pb_120">
            <div className="auto-container">
                <div className="upper-content pb_110">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                            <div className="title-box p_relative">
                                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-41.png)'}}></div>
                                <div className="sec-title">
                                    <span className="sub-title">Overview</span>
                                    <h2>Explore Our Journey & Core Beliefs</h2>
                                </div>
                                <div className="certified-box">
                                    <div className="rotate-box">
                                        <span className="curved-circle-2">ISO 27001 Certified Bank</span>
                                        <div className="icon-box"><img src="assets/images/icons/icon-196.png" alt="" /></div>
                                    </div>
                                    <h6>ISO Certification</h6>
                                    <h4>Our Commitment to Quality and <br />Secure banking.</h4>
                                    <span className="text">2000-2001</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="text-box mb_30">
                                    <p>On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized same as saying through shrinking from toil and pain.</p>
                                    <p>We denounce with righteous indignation dislike men who are so beguiled and demoralized same as saying.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-197.png" alt="" /></div>
                                        <span className="big-text">Features</span>
                                    </div>
                                    <ul className="list-item">
                                        <li>Wide Range of Financial Products</li>
                                        <li>Innovative Financial Solutions</li>
                                        <li>Extensive Branch and ATM Network</li>
                                        <li>Robust Security Measures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <figure className="image-box"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/shape/shape-42.png)'}}></div>
                                    <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-43.png)'}}></div>
                                    <h2>29<span>+</span></h2>
                                    <h6>Years of experience in the Banking Sector.</h6>
                                    <Link to="/about"><i className="flaticon-right-arrow"></i>Our History</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="video-content">
                                <div className="inner-box" style={{backgroundImage: 'url(assets/images/resource/video-1.jpg)'}}>
                                    <div className="video-btn centred mb_60">
                                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="fas fa-play"></i></a> 
                                    </div>
                                    <div className="author-box">
                                        <span className="designation">CEO & Founder of Flexibank</span>
                                        <h4>Leo George</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="funfact-section centred">
            <div className="outer-container clearfix">
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="8.5">00</span><span className="symble">k</span>
                        </div>
                        <p>Happy Customers World Wide.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-28.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="0.5">00</span><span className="symble">m</span>
                        </div>
                        <p>Transactions Processed Daily.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="10000">00</span><span className="symble">+</span>
                        </div>
                        <p>ATMs and Branches Globally.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-30.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="50">00</span><span className="symble">+</span>
                        </div>
                        <p>Years of Trusted Banking Service.</p>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="statements-section sec-pad-2 centred">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Statements</span>
                    <h2>Our Purpose and Principles</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/statements-1.jpg" alt="" /></figure>
                                    <h3>Our Mission</h3>
                                </div>
                                <div className="text-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-199.png" alt="" /></div>
                                    <p>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-two">
                            <div className="inner-box">
                                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-44.png)'}}></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-201.png" alt="" /></div>
                                <h3>Our Core Values</h3>
                                <p>Find fault with a man who chooses to enjoy a pleasure that has annoying resultant pleasure.</p>
                                <ul className="list-item clearfix">
                                    <li>Integrity</li>
                                    <li>Customer Focus</li>
                                    <li>Transparency</li>
                                    <li>Accountability</li>
                                    <li>Teamwork</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/statements-2.jpg" alt="" /></figure>
                                    <h3>Our Vision</h3>
                                </div>
                                <div className="text-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-200.png" alt="" /></div>
                                    <p>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="awards-section alternat-2 pt_110 pb_110">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 title-column">
                        <div className="title-inner">
                            <div className="sec-title">
                                <span className="sub-title">Awards</span>
                                <h2>Prestigious Awards and Honors</h2>
                                <p>Proudly recognized for our commitment to excellence, innovation, and customer satisfaction.</p>
                            </div>
                            <ul className="image-list">
                                <li><img src="assets/images/resource/award-1.jpg" alt="" /></li>
                                <li><img src="assets/images/resource/award-2.jpg" alt="" /></li>
                                <li><img src="assets/images/resource/award-3.jpg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="content-box centred pl_100 mt_7">
                            <div className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                <div className="award-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}}></div>
                                        <h3>Best Bank of <br />the Year</h3>
                                        <div className="icon-box"><img src="assets/images/icons/award-1.png" alt="" /></div>
                                        <p>Awarded by <br />National Banking Assoc...</p>
                                        <span>2023-2025</span>
                                    </div>
                                </div>
                                <div className="award-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}}></div>
                                        <h3>Best Customer <br />Service Award</h3>
                                        <div className="icon-box"><img src="assets/images/icons/award-2.png" alt="" /></div>
                                        <p>Awarded by <br />Global Finance Magazine.</p>
                                        <span>2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="chooseus-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-45.png)'}}></div>
            <div className="auto-container">
                <div className="sec-title light centred">
                    <span className="sub-title">Why Choose Us</span>
                    <h2>Reason for Choosing Us</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt="" /></figure>
                            <div className="chart-box centred">
                                <h6> Financial Growth</h6>
                                <div className="chart mb_12"><img src="assets/images/icons/chart-1.png" alt="" /></div>
                                <ul className="option-list mb_7 clearfix">
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="radio" id="checkbox1" name="same" checked="" />
                                            <label htmlFor="checkbox1">Option&nbsp;1</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="radio" id="checkbox2" name="same" />
                                            <label htmlFor="checkbox2">Option&nbsp;2</label>
                                        </div>
                                    </li>
                                </ul>
                                <span className="text">Growth</span>
                                <span className="price">$42,4670</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-203.png" alt="" /></div>
                                    <h3>Customer <br />Centric Approach</h3>
                                    <p>Idea of denouncing pleasure and praising pain was born.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-204.png" alt="" /></div>
                                    <h3>Innovative Banking <br />Solutions</h3>
                                    <p>Rationally encounter consequences that are extremely.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-205.png" alt="" /></div>
                                    <h3>Advanced Digital <br />Banking</h3>
                                    <p>The wise man therefore always holds in these matters.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-206.png" alt="" /></div>
                                    <h3>Expert Financial <br />Advice</h3>
                                    <p>Power of choice is untrammelled and when nothing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
