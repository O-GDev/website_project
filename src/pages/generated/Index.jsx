import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/ui/Carousel'
import Tabs from '../../components/ui/Tabs'
import NiceSelect from '../../components/ui/NiceSelect'

export default function Index(){
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


        


        


        
        <section className="banner-section p_relative">
            <Carousel className="banner-carousel owl-theme owl-carousel">
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-1.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Flexi Savings</span> Earn up to 2.5% APY</h5>
                            <h2>Enjoy zero free banking on your sb account.</h2>
                            <div className="btn-box"><Link to="/service-details"><span>Book a Consultation</span></Link></div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-2.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Business Loan</span> From 8.5% APR</h5>
                            <h2>Fuel your business growth with our easy loan</h2>
                            <div className="btn-box"><Link to="/loans-1"><span>Apply Your Loan</span></Link></div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-3.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Credit Card</span> Enjoy 0% Annual Fee</h5>
                            <h2>Maximize benefits with your every transaction</h2>
                            <div className="btn-box"><Link to="/cards"><span>Apply Your Card</span></Link></div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
        


        
        <section className="online-service">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row d_flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="info-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt="" /></div>
                                    <h4>Mobile App</h4>
                                    <p>Instant Banking, Instant Peace.</p>
                                </div>
                                <div className="btn-box">
                                    <Link to="/"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                    <Link to="/"><i className="flaticon-apple"></i><span>App Store</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image-box"><img src="assets/images/resource/online-1.jpg" alt="" /></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h4>Online Services</h4>
                                            <ul className="service-list clearfix">
                                                <li><Link to="/service-details">Net Banking<i className="flaticon-right-arrow"></i></Link></li>
                                                <li><Link to="/service-details">Mobile Banking<i className="flaticon-right-arrow"></i></Link></li>
                                                <li><Link to="/service-details">Make Payment<i className="flaticon-right-arrow"></i></Link></li>
                                            </ul>
                                            <div className="link-box">
                                                <Link to="/service"><span>+</span>More Services</Link>
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
        


        
        <section className="banking-service sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <Tabs className="tabs-box">
                    <div className="tab-btn-box mb_70">
                        <Tabs className="tab-btns tab-buttons tab-btn-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="tab-btn active-btn" data-tab="#tab-1">
                                <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                <h3>Fixed Deposit</h3>
                                <p>Higher Returns & Security.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-2">
                                <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="" /></div>
                                <h3>Accounts</h3>
                                <p>Duty the obligations business.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-3">
                                <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="" /></div>
                                <h3>Investments</h3>
                                <p>Secure you & your family.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-4">
                                <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt="" /></div>
                                <h3>Family 360o</h3>
                                <p>Complete banking solutions.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-5">
                                <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                <h3>Fixed Deposit</h3>
                                <p>Higher Returns & Security.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-6">
                                <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt="" /></div>
                                <h3>Accounts</h3>
                                <p>Duty the obligations business.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-7">
                                <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt="" /></div>
                                <h3>Investments</h3>
                                <p>Secure you & your family.</p>
                            </div>
                            <div className="tab-btn" data-tab="#tab-8">
                                <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt="" /></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
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
        



        
        <section className="custom-banking sec-pad bg-color-1">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-2.png)'}}></div>
            <div className="auto-container">
                <div className="title-box">
                    <div className="sec-title light">
                        <span className="sub-title">Custom Banking</span>
                        <h2>Banking For Your Needs</h2>
                    </div>
                    <div className="support-box">
                        <h5>Get Support</h5>
                        <div className="phone-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-26.png" alt="" /></div>
                            <a href="tel:49556789091">+49 55 678 90 & 91</a>
                            <span>9.00 am to 7.00 pm</span>
                        </div>
                    </div>
                </div>
                <Tabs className="tabs-box">
                    <figure className="support-image"><img src="assets/images/resource/men-1.png" alt="" /></figure>
                    <div className="tab-btn-one">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li className="tab-btn active-btn" data-tab="#tab-9">Business</li>
                            <li className="tab-btn" data-tab="#tab-10">Individual</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-9">
                            <div className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className="tab-btn-2 active-btn-2" data-tab="#tab-11">
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-12">
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-13">
                                                    <h4>Credit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-14">
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-15">
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-51">
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div className="tab-2 active-tab-2" id="tab-11">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-12">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Flexibank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-13">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Credit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Credit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-14">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Flexibank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-15">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Flexibank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-51">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Flexibank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
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
                        <div className="tab" id="tab-10">
                            <div className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className="tab-btn-2 active-btn-2" data-tab="#tab-16">
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-17">
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-18">
                                                    <h4>Credit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-19">
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-20">
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-52">
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div className="tab-2 active-tab-2" id="tab-16">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-17">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Flexibank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-18">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Credit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Credit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-19">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Flexibank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-20">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Flexibank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-52">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Flexibank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>₦2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
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
                    </div>
                </Tabs>
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
        


        
        <section className="calculator-section pt_120 pb_120">
            <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt="" /></figure>
            <span className="big-text">Calculation <br />Instant</span>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="tabs-box">
                        <div className="tab-btn-box">
                            <div className="tab-btns tab-buttons clearfix">
                                <div className="tab-btn active-btn" data-tab="#tab-21"><h4>Home Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-22"><h4>Vehicle Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-23"><h4>Personal Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-24"><h4>Education Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-25"><h4>Mortgage Loan</h4></div>
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className="tab active-tab" id="tab-21">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>₦500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>₦50,000</span>
                                                                    <span>₦2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>₦4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-22">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>₦500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>₦50,000</span>
                                                                    <span>₦2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>₦4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-23">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>₦500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>₦50,000</span>
                                                                    <span>₦2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>₦4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-24">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>₦500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>₦50,000</span>
                                                                    <span>₦2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>₦4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-25">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>₦500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>₦50,000</span>
                                                                    <span>₦2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>₦4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>₦541,388</span>
                                                </div>
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
        


        
        <section className="creditcard-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-4.png)'}}></div>
            <span className="big-text">Spending <br />Secure</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 card-column">
                        <div className="card-inner">
                            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-3.png)'}}></div>
                            <figure className="card-box"><img src="assets/images/icons/card-1.png" alt="" /></figure>
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
                                                        <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt="" /></div>
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
        


        
        <section className="partners-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Our Partners</span>
                    <h2>Trusted Partners & Regulatory Bodies</h2>
                </div>
                <div className="row clearfix">
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images.png" alt="CBN Logo" />
                                </div>
                                <h3>Central Bank of Nigeria</h3>
                                <p>CBN</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images.jpeg" alt="NDIC Logo" />
                                </div>
                                <h3>Nigeria Deposit Insurance Corporation</h3>
                                <p>NDIC</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images (1).png" alt="NIBSS Logo" />
                                </div>
                                <h3>Nigeria Inter-Bank Settlement System</h3>
                                <p>NIBSS</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images (2).png" alt="Interswitch Logo" />
                                </div>
                                <h3>Interswitch</h3>
                                <p>Payment Technology</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images (1).jpeg" alt="CreditRegistry Logo" />
                                </div>
                                <h3>CreditRegistry</h3>
                                <p>Nigeria's Largest Credit Bureau</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/IMG_6436-scaled.jpeg" alt="FirstCentral Credit Bureau Logo" />
                                </div>
                                <h3>FirstCentral Credit Bureau</h3>
                                <p>Nigeria's First Licensed Credit Bureau</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/zjnz2ufovbgfcexsetb7.avif" alt="CRC Credit Bureau Logo" />
                                </div>
                                <h3>CRC Credit Bureau Limited</h3>
                                <p>Nigeria's Leading Credit Bureau</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="partner-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/partners/images (1).jpeg" alt="BankOne Logo" />
                                </div>
                                <h3>BankOne</h3>
                                <p>Core Banking Software Solutions</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        


        
        <section className="faq-section sec-pad bg-color-1">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Faq’s</span>
                    <h2>Read Questions & Answers</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 category-column">
                        <div className="category-box">
                            <h3>Categories</h3>
                            <p>Wide range of topics to address common queries.</p>
                            <ul className="category-list clearfix">
                                <li><Link to="/">Account</Link></li>
                                <li><Link to="/">Online Banking</Link></li>
                                <li><Link to="/">Mobile Banking</Link></li>
                                <li><Link to="/">Deposits</Link></li>
                                <li><Link to="/">Withdrawals</Link></li>
                                <li><Link to="/">Loans</Link></li>
                                <li><Link to="/">Business</Link></li>
                            </ul>
                            <div className="lower-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                                <h5>Can't Find What You Need?</h5>
                                <Link to="/"><i className="flaticon-right-arrow"></i>Submit Queries</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
                        <ul className="accordion-box">
                            <li className="accordion block active-block">
                                <div className="acc-btn active">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>01</span>How do I open a new account?</h4>
                                </div>
                                <div className="acc-content current">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>02</span>How can I check my account balance?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>03</span>Is online banking secure?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>04</span>What is the daily ATM withdrawal limit?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>05</span>How do I apply for a loan?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="news-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Blog Post</span>
                    <h2>Latest from Blog Post</h2>
                </div>
                <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                    <div className="news-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                <div className="view-btn"><a href="assets/images/news/news-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                            </div>
                            <div className="content-box">
                                <div className="upper-box">
                                    <div className="title-box">
                                        <h6><img src="assets/images/icons/icon-36.png" alt="" />Financial Planning</h6>
                                        <h5><span>By </span><Link to="/blog-details">D.Beckham</Link></h5>
                                    </div>
                                    <div className="post-date align-3">
                                        <h3>21</h3>
                                        <h6>Jul, 2025</h6>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h3><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                    <div className="link-box">
                                        <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                        <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                <div className="view-btn"><a href="assets/images/news/news-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                            </div>
                            <div className="content-box">
                                <div className="upper-box">
                                    <div className="title-box">
                                        <h6><img src="assets/images/icons/icon-36.png" alt="" />Credit Card</h6>
                                        <h5><span>By </span><Link to="/blog-details">Vk.Christopher</Link></h5>
                                    </div>
                                    <div className="post-date align-3">
                                        <h3>06</h3>
                                        <h6>Jul, 2025</h6>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h3><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                    <div className="link-box">
                                        <h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5>
                                        <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Business Banking</h6>
                                            <h5><span>By </span><Link to="/blog-details">Z.Benjamin</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>15</h3>
                                            <h6>Jun, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />6 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Technology</h6>
                                            <h5><span>By </span><Link to="/blog-details">L.Nathaniel</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>31</h3>
                                            <h6>May, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
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
