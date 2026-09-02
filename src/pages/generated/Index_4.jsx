import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/ui/Carousel'
import Tabs from '../../components/ui/Tabs'
import NiceSelect from '../../components/ui/NiceSelect'

export default function Index_4(){
  return (
    <>


    <div className="boxed_wrapper home_4">


        


        
        <div id="search-popup" className="search-popup">
            <div className="popup-inner">
                <div className="upper-box">
                    <figure className="logo-box"><Link to="/"><img src="assets/images/logo-7.png" alt="" /></Link></figure>
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


        


        


        
        <section className="banner-style-four centred">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-24.png)'}}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="upper-content mb_90">
                        <h4>Welcome to Flexibank</h4>
                        <h2>Every Solution, One <br />Trusted Bank</h2>
                        <p>Every pleasure is to be welcomed and every pain avoided <br />duty or the obligations of business.</p>
                        <Link to="/index-4"><span>Open Your Account</span></Link>
                    </div>
                    <div className="lower-content">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Download Our Mobile App</h4>
                                    <ul className="download-list">
                                        <li><Link to="/index-4"><i className="flaticon-play-store"></i></Link></li>
                                        <li><Link to="/index-4"><i className="flaticon-apple"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Join With 20k+ Account Holder</h4>
                                    <ul className="clients-list">
                                        <li><img src="assets/images/resource/clients-1.png" alt="" /></li>
                                        <li><img src="assets/images/resource/clients-2.png" alt="" /></li>
                                        <li><img src="assets/images/resource/clients-3.png" alt="" /></li>
                                        <li><span>+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Top Discounts with Our Cards</h4>
                                    <ul className="icon-list">
                                        <li><img src="assets/images/icons/icon-74.png" alt="" /></li>
                                        <li><img src="assets/images/icons/icon-75.png" alt="" /></li>
                                        <li><img src="assets/images/icons/icon-76.png" alt="" /></li>
                                        <li><span>+</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="investment-section">
            <div className="bg-color bg-color-5"></div>
            <div className="outer-container p_relative pl_40 pr_40">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 investment-block">
                        <div className="investment-block-one">
                            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-25.png)'}}></div>
                            <figure className="image-box"><img src="assets/images/resource/investment-1.png" alt="" /></figure>
                            <div className="inner-box">
                                <div className="sec-title light">
                                    <span className="sub-title">Investment</span>
                                    <h2>Zero in on investments that fit you</h2>
                                </div>
                                <p>Personalized investment options tailored to your financial goals.</p>
                                <Link to="/index-4"><span>Expert Guidance</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 investment-block">
                        <div className="investment-block-two">
                            <div className="inner-box">
                                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}}></div>
                                <figure className="image-box"><img src="assets/images/resource/investment-2.png" alt="" /></figure>
                                <span className="big-text">Flexibank</span>
                                <h4>Watch Video <br />for Protecting Your Identity.</h4>
                                <div className="video-btn centred">
                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><img src="assets/images/icons/icon-131.png" alt="" /></a> 
                                </div>
                                <div className="download-box">
                                    <button type="button"><img src="assets/images/icons/icon-132.png" alt="" /></button>
                                    <h5>Download <br />for Easy Access</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="banking-service home-4 sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <Tabs className="tabs-box">
                    <div className="tab-btn-box mb_70">
                        <Tabs className="tab-btns tab-buttons tab-btn-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="tab-btn active-btn" data-tab="#tab-1">
                                <div className="icon-box"><img src="assets/images/icons/icon-133.png" alt="" /></div>
                                <h3>Fixed Deposit</h3>
                                <p>Higher Returns & Security.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-2">
                                <div className="icon-box"><img src="assets/images/icons/icon-134.png" alt="" /></div>
                                <h3>Accounts</h3>
                                <p>Duty the obligations business.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-3">
                                <div className="icon-box"><img src="assets/images/icons/icon-135.png" alt="" /></div>
                                <h3>Investments</h3>
                                <p>Secure you & your family.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-4">
                                <div className="icon-box"><img src="assets/images/icons/icon-136.png" alt="" /></div>
                                <h3>Family 360o</h3>
                                <p>Complete banking solutions.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-5">
                                <div className="icon-box"><img src="assets/images/icons/icon-133.png" alt="" /></div>
                                <h3>Fixed Deposit</h3>
                                <p>Higher Returns & Security.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-6">
                                <div className="icon-box"><img src="assets/images/icons/icon-134.png" alt="" /></div>
                                <h3>Accounts</h3>
                                <p>Duty the obligations business.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-7">
                                <div className="icon-box"><img src="assets/images/icons/icon-135.png" alt="" /></div>
                                <h3>Investments</h3>
                                <p>Secure you & your family.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-8">
                                <div className="icon-box"><img src="assets/images/icons/icon-136.png" alt="" /></div>
                                <h3>Family 360o</h3>
                                <p>Complete banking solutions.</p>
                            </div>
                        </Tabs>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-1">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-2">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-3">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-4">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-5">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-6">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-7">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab" id="tab-8">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-5.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-137.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-138.png" alt="" /></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link to="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
        


        
        <section className="secure-growth-two dark-section bg-color-5 sec-pad-2">
            <figure className="image-layer"><img src="assets/images/resource/men-3.png" alt="" /></figure>
            <span className="big-text">Growth <br />Financial</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-9 col-md-12 col-sm-12 big-column">
                        <div className="sec-title">
                            <span className="sub-title">Secure Growth</span>
                            <h2>Enhance Your Wealth Safely</h2>
                        </div>
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Trade FX</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-140.png" alt="" /></div>
                                        <span className="count-text">01.</span>
                                    </div>
                                    <p>Perfect simple easy some matters to this...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Currency Pairs</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Real-time Quotes</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Market Analysis</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Multi Currency a/c</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-141.png" alt="" /></div>
                                        <span className="count-text">02.</span>
                                    </div>
                                    <p>Duty through weaknes will whichis same...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Currency Options</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Best Rates</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Secure Transactions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Mutual Funds</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-142.png" alt="" /></div>
                                        <span className="count-text">03.</span>
                                    </div>
                                    <p>When nothing prevents our being able to do...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Equity Funds</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />International Funds</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-139.png" alt="" />Index Funds</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="exchange-section light-section bg-color-2">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-28.png)'}}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <span className="sub-title">Forex Rates</span>
                    <h2>Foreign Exchange Rates</h2>
                </div>
                <div className="exchange-tab">
                    <div className="tab-btn-box">
                        <ul className="tab-btns product-tab-btns clearfix">
                            <li className="p-tab-btn active-btn" data-tab="#tab-9">Money Send & Receive</li>
                            <li className="p-tab-btn" data-tab="#tab-10">Load & Redeem Forex Card</li>
                        </ul>
                    </div>
                    <div className="p-tabs-content">
                        <div className="p-tab active-tab" id="tab-9">
                            <div className="four-item-carousel owl-carousel owl-theme nav-style-one owl-dots-none">
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>jpy</h4>
                                                    <p>Japanese Yen</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-2.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$153.12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>aud</h4>
                                                    <p>Australian Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-3.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$148.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>cad</h4>
                                                    <p>Canadian Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-4.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$148.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>sek</h4>
                                                    <p>Swedish Krona</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-5.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$67.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-tab" id="tab-10">
                            <div className="four-item-carousel owl-carousel owl-theme nav-style-one owl-dots-none">
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>jpy</h4>
                                                    <p>Japanese Yen</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-2.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$153.12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>aud</h4>
                                                    <p>Australian Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-3.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$148.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>cad</h4>
                                                    <p>Canadian Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-4.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$148.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="exchange-block-one">
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>usd</h4>
                                                    <p>American Dollar</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-1.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Buys</h5>
                                                <p>$148.25</p>
                                            </div>
                                            <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                        </div>
                                        <div className="lower-box">
                                            <div className="currency-box">
                                                <div className="currency-name">
                                                    <h4>sek</h4>
                                                    <p>Swedish Krona</p>
                                                </div>
                                                <figure className="flag"><img src="assets/images/icons/flag-5.png" alt="" /></figure>
                                            </div>
                                            <div className="buys-box">
                                                <h5>Sells</h5>
                                                <p>$67.25</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Discover <Link to="/service">More Services</Link> – Tailored to Meet Your Financial Needs.</h5>
                </div>
            </div>
        </section>
        


        
        <section className="instant-section sec-pad">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">Instant Help</span>
                                <h2>Immediate Service Request</h2>
                            </div>
                            <ul className="accordion-box">
                                <li className="accordion block active-block">
                                    <div className="acc-btn active">
                                        <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                        <h4><img src="assets/images/icons/icon-143.png" alt="" />Account Management</h4>
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Reset Net Banking Password</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                        <h4><img src="assets/images/icons/icon-144.png" alt="" />Transaction Services</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Reset Net Banking Password</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                        <h4><img src="assets/images/icons/icon-145.png" alt="" />Loan and Credit Services</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Reset Net Banking Password</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                        <h4><img src="assets/images/icons/icon-146.png" alt="" />Mobile / Internet Banking</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="assets/images/icons/icon-147.png" alt="" />
                                                            <span>Reset Net Banking Password</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 support-column">
                        <div className="support-inner">
                            <div className="support-icon mt_11 align-3">
                                <div className="icon"><img src="assets/images/icons/icon-148.png" alt="" /></div>
                                <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-29.png)'}}></div>
                            </div>
                            <div className="support-box">
                                <figure className="image-box"><img src="assets/images/resource/support-1.png" alt="" /></figure>
                                <div className="lower-content">
                                    <span className="big-text">support</span>
                                    <ul className="info-list mb_30 pb_3 clearfix">
                                        <li><a href="tel:08008961234">0800 896 1234</a> <span>(Toll Free)</span> <br />Personal</li>
                                        <li><a href="tel:496912345678">+49 69 1234 5678 </a> <br />Corporate</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link to="/index-4"><span>Send Your Queries</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="working-section home-4 bg-color-5 centred">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">How It’s Work</span>
                    <h2>Start Banking With in 5 Mins</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">01</span>
                                <h3>Verify Customer</h3>
                                <p>Nor again is there anyone who loves or pursues desire obtain pain all itself.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-149.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">02</span>
                                <h3>Documentation</h3>
                                <p>One rejects, dislikes avoids pleasure itself because it is who do not know.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-150.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">03</span>
                                <h3>A/c Verification</h3>
                                <p>Ever undertakes laborious physical exercise except in all advantages.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-151.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">04</span>
                                <h3>Start Banking</h3>
                                <p>Foresee the pain & trouble that are bound ensue equal blame belongs fail.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-152.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text light centred">
                    <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <Link to="/index-2">Start Your Account.</Link></h5>
                </div>
            </div>
        </section>
        


        
        <section className="locker-facility home-4 pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">Locker Facility</span>
                                <h2>Ultimate Locker Solution for Valuables</h2>
                            </div>
                            <div className="text-box">
                                <p>Frequently occur that pleasures have to repudiated and annoyances accepte the wise man always holds.</p>
                                <h5><i className="flaticon-sparkle"></i>Affordable Security,Check our Locker <Link to="/pricing">Pricing.</Link></h5>
                            </div>
                            <div className="inner-box mb_50">
                                <h6>Key Features</h6>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-153.png" alt="" /></div>
                                            <p>Available in Different Sizes.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-153.png" alt="" /></div>
                                            <p>Affordable Rental Plans.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link to="/"><span>Locker Request</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/locker-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="creditcard-section home-4 sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-31.png)'}}></div>
            <span className="big-text">Spending <br />Secure</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 card-column">
                        <div className="card-inner">
                            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-30.png)'}}></div>
                            <figure className="card-box"><img src="assets/images/icons/card-3.png" alt="" /></figure>
                            <span className="highlights-one">Cashback Up to: 25%</span>
                            <span className="highlights-two">Average APR: 5.50%</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title light">
                                <span className="sub-title">Credit Card</span>
                                <h2>Discover Our <br />Range of Credit Cards</h2>
                            </div>
                            <div className="tabs-box">
                                <div className="tab-btn-box pb_20">
                                    <div className="tab-btns tab-buttons clearfix">
                                        <div className="tab-btn active-btn" data-tab="#tab-26"><img src="assets/images/icons/icon-33.png" alt="" /><h5>Rewards Cards</h5></div>
                                        <div className="tab-btn" data-tab="#tab-27"><img src="assets/images/icons/icon-33.png" alt="" /><h5>Cashback Cards</h5></div>
                                        <div className="tab-btn" data-tab="#tab-28"><img src="assets/images/icons/icon-33.png" alt="" /><h5>Travel Cards</h5></div>
                                    </div>
                                </div>
                                <div className="tabs-content">
                                    <div className="tab active-tab" id="tab-26">
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <Link to="/"><i className="flaticon-right-arrow"></i>Explore Cards</Link>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="index.html">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-154.png" alt="" /></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required />
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-27">
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <Link to="/"><i className="flaticon-right-arrow"></i>Explore Cards</Link>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="index.html">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-154.png" alt="" /></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required />
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab" id="tab-28">
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <Link to="/"><i className="flaticon-right-arrow"></i>Explore Cards</Link>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="index.html">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-154.png" alt="" /></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required />
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="clients-section home-4 centred sec-pad">
            <div className="inner-container">
                <div className="sec-title">
                    <span className="sub-title">centred</span>
                    <h2>Trusted Corporate Partners</h2>
                </div>
                <div className="six-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
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
                </div>
            </div>
        </section>
        


        
        <section className="testimonial-style-two home-4 pt_90 pb_90">
            <div className="auto-container">
                <div className="inner-container p_relative">
                    <span className="big-text">testimonials</span>
                    <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Highly Trustworthy</h3>
                                <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Holder, Newyork.</span>
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
                                    <span className="designation">Savings Account Holder, California.</span>
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
                                    <span className="designation">Business Account Holder, Newyork.</span>
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
