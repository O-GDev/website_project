import React from 'react'
import { Link } from 'react-router-dom'

export default function Partners(){
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
                    <h1>Our Partners & Regulatory Bodies</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Partners</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="partners-intro sec-pad">
            <div className="auto-container">
                <div className="partner-intro">
                    <div className="sec-title centred">
                        <span className="sub-title">Trusted Partners</span>
                        <h2>Our Regulatory Bodies & Partners</h2>
                    </div>
                    <p>We are proudly regulated and partnered with Nigeria's leading financial institutions, ensuring the highest standards of banking excellence, security, and customer protection.</p>
                </div>
            </div>
        </section>
        


        
        <section className="partners-section pt_0 pb_60">
            <div className="auto-container">
                <div className="partner-category">
                    <div className="partner-category-title">
                        <h2>Regulatory Bodies</h2>
                    </div>
                    <div className="row clearfix">
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/cbn-logo.png" alt="Central Bank of Nigeria" />
                                    </div>
                                    <h3>Central Bank of Nigeria</h3>
                                    <p>CBN</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/ndic-logo.png" alt="NDIC" />
                                    </div>
                                    <h3>Nigeria Deposit Insurance Corporation</h3>
                                    <p>NDIC</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/nibss-logo.png" alt="NIBSS" />
                                    </div>
                                    <h3>Nigeria Inter-Bank Settlement System</h3>
                                    <p>NIBSS</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="partners-section pt_0 pb_60">
            <div className="auto-container">
                <div className="partner-category">
                    <div className="partner-category-title">
                        <h2>Payment Partners</h2>
                    </div>
                    <div className="row clearfix">
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/interswitch-logo.png" alt="Interswitch" />
                                    </div>
                                    <h3>Interswitch</h3>
                                    <p>Leading African Payment Technology</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/bankone-logo.png" alt="BankOne" />
                                    </div>
                                    <h3>BankOne</h3>
                                    <p>Core Banking Software Solutions</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="partners-section pt_0">
            <div className="auto-container">
                <div className="partner-category">
                    <div className="partner-category-title">
                        <h2>Credit Bureaus</h2>
                    </div>
                    <div className="row clearfix">
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/creditregistry-logo.png" alt="Credit Registry" />
                                    </div>
                                    <h3>CreditRegistry</h3>
                                    <p>Nigeria's Largest Credit Bureau</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/firstcentral-logo.png" alt="FirstCentral Credit Bureau" />
                                    </div>
                                    <h3>FirstCentral Credit Bureau</h3>
                                    <p>Nigeria's First Licensed Credit Bureau</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="partner-block">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <img src="assets/images/partners/crc-logo.png" alt="CRC Credit Bureau" />
                                    </div>
                                    <h3>CRC Credit Bureau Limited</h3>
                                    <p>Nigeria's Leading Credit Bureau</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="cta-section">
            <div className="outer-container clearfix">
                <div className="cta-block-one">
                    <div className="inner-box">
                        <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-20.png)'}}></div>
                        <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-1.jpg)'}}></div>
                        <div className="content-box">
                            <h2>Ready to Experience<br /> Premium Banking?</h2>
                            <div className="btn-box">
                                <Link to="/contact"><span>Get Started Today</span></Link>
                            </div>
                        </div>
                        <div className="image-box">
                            <img src="assets/images/resource/cta-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        


        
        <div className="scroll-to-top scroll-to-target" data-target="html">
            <span className="fa fa-angle-up"></span>
        </div>
        


    </div>
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


    </>
  )
}
