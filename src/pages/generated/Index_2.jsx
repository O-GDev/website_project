import React from 'react'
import { Link } from 'react-router-dom'

export default function Index_2(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
        <div id="chat-popup" className="chat-popup">
            <div className="popup-inner">
                <div className="close-chat"><i className="fas fa-times"></i></div>
                <div className="chat-form">
                    <p>Please fill out the form below and we will get back to you as soon as possible.</p>
                    <form method="post" action="index.html">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Text"></textarea>
                        </div>
                        <div className="form-group message-btn">
                            <button type="submit" className="theme-btn btn-one">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        
        <div id="search-popup" className="search-popup">
            <div className="popup-inner">
                <div className="upper-box">
                    <figure className="logo-box"><Link to="/"><img src="assets/images/logo-4.png" alt="" /></Link></figure>
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


        


        


        
        <section className="banner-style-two p_relative">
            <div className="banner-carousel owl-theme owl-carousel dots-style-one owl-nav-none">
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-4.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h2>Banking for a Better Tomorrow</h2>
                                    <p>Secure, convenient, and innovative banking solutions today.</p>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <h3>3.2k</h3>
                                            <span>Live Savings Accounts</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                        </div>
                                        <div className="single-item">
                                            <h3>$2b</h3>
                                            <span>In Customer Savings</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/account-details"><span>Open Your Account</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-5.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h2>Invest with Confidence Now</h2>
                                    <p>Secure, convenient, and innovative banking solutions today.</p>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <h3>3.2k</h3>
                                            <span>Live Savings Accounts</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                        </div>
                                        <div className="single-item">
                                            <h3>$2b</h3>
                                            <span>In Customer Savings</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/investments-details"><span>Start Investing Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item p_relative">
                    <div className="bg-layer" style={{backgroundImage: 'url(assets/images/banner/banner-6.jpg)'}}></div>
                    <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <h2>Easy Loans, Quick Approvals</h2>
                                    <p>Secure, convenient, and innovative banking solutions today.</p>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <h3>3.2k</h3>
                                            <span>Live Savings Accounts</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                        </div>
                                        <div className="single-item">
                                            <h3>$2b</h3>
                                            <span>In Customer Savings</span>
                                            <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/loans-1"><span>Check Loan Eligibility</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="custom-banking-two">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-52.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-53.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-54.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-52.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-53.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-54.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-52.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-53.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img src="assets/images/icons/icon-54.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Discover <Link to="/service">More Services</Link> – Tailored to Meet Your Financial Needs.</h5>
                </div>
            </div>
        </section>
        


        
        <section className="funfact-section centred">
            <div className="outer-container bg-color-2 shadow-none clearfix">
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-55.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="8.5">00</span><span className="symble">k</span>
                        </div>
                        <p>Happy Customers World Wide.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-56.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="0.5">00</span><span className="symble">m</span>
                        </div>
                        <p>Transactions Processed Daily.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-57.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="10000">00</span><span className="symble">+</span>
                        </div>
                        <p>ATMs and Branches Globally.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-58.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="50">00</span><span className="symble">+</span>
                        </div>
                        <p>Years of Trusted Banking Service.</p>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="secure-growth-two bg-color-3 sec-pad-2">
            <figure className="image-layer"><img src="assets/images/resource/men-3.png" alt="" /></figure>
            <span className="big-text">Growth</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-9 col-md-12 col-sm-12 big-column">
                        <div className="sec-title light">
                            <span className="sub-title">Secure Growth</span>
                            <h2>Enhance Your Wealth Safely</h2>
                        </div>
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Trade FX</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-59.png" alt="" /></div>
                                        <span className="count-text">01.</span>
                                    </div>
                                    <p>Perfect simple easy some matters to this...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Currency Pairs</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Real-time Quotes</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Market Analysis</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Multi Currency a/c</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-60.png" alt="" /></div>
                                        <span className="count-text">02.</span>
                                    </div>
                                    <p>Duty through weaknes will whichis same...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Currency Options</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Best Rates</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Secure Transactions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="growth-block-two">
                                <div className="inner-box">
                                    <h3><Link to="/index-2">Mutual Funds</Link></h3>
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-61.png" alt="" /></div>
                                        <span className="count-text">03.</span>
                                    </div>
                                    <p>When nothing prevents our being able to do...</p>
                                    <ul className="list-item clearfix">
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Equity Funds</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />International Funds</Link></li>
                                        <li><Link to="/index-2"><img src="assets/images/icons/icon-88.png" alt="" />Index Funds</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="exchange-section bg-color-2">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-5.png)'}}></div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Forex Rates</span>
                    <h2>Foreign Exchange Rates</h2>
                </div>
                <div className="exchange-tab">
                    <div className="tab-btn-box">
                        <ul className="tab-btns product-tab-btns clearfix">
                            <li className="p-tab-btn active-btn" data-tab="#tab-1">Money Send & Receive</li>
                            <li className="p-tab-btn" data-tab="#tab-2">Load & Redeem Forex Card</li>
                        </ul>
                    </div>
                    <div className="p-tabs-content">
                        <div className="p-tab active-tab" id="tab-1">
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
                        <div className="p-tab" id="tab-2">
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
        


        
        <section className="help-section sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Instant Help</span>
                    <h2>Immediate Service Request</h2>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 btn-column">
                            <div className="tab-btn-box">
                                <div className="tab-btns tab-buttons">
                                    <div className="tab-btn active-btn" data-tab="#tab-3">
                                        <div className="icon-box"><img src="assets/images/icons/icon-62.png" alt="" /></div>
                                        <h4>Account <br />Management</h4>
                                    </div>
                                    <div className="tab-btn" data-tab="#tab-4">
                                        <div className="icon-box"><img src="assets/images/icons/icon-63.png" alt="" /></div>
                                        <h4>Transaction <br />Services</h4>
                                    </div>
                                    <div className="tab-btn" data-tab="#tab-5">
                                        <div className="icon-box"><img src="assets/images/icons/icon-64.png" alt="" /></div>
                                        <h4>Loan and Credit <br />Services</h4>
                                    </div>
                                    <div className="tab-btn" data-tab="#tab-6">
                                        <div className="icon-box"><img src="assets/images/icons/icon-65.png" alt="" /></div>
                                        <h4>Mobile / Internet <br />Banking</h4>
                                    </div>
                                    <div className="tab-btn" data-tab="#tab-7">
                                        <div className="icon-box"><img src="assets/images/icons/icon-66.png" alt="" /></div>
                                        <h4>Fraud and <br />Security Services</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-3">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Effortlessly Manage Your Account Details</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link to="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="tab-4">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Effortlessly Manage Your Transaction Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link to="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="tab-5">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Loan and Credit Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link to="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="tab-6">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Mobile / Internet Banking</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link to="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="tab-7">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Security Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link to="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link to="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt="" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="apps-section sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-6.png)'}}></div>
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-7.png)'}}></div>
            </div>
            <figure className="image-layer"><img src="assets/images/resource/apps-1.png" alt="" /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                        <div className="content-box p_relative pl_200">
                            <span className="big-text">anytime <br />bank</span>
                            <div className="inner-box">
                                <div className="sec-title light">
                                    <span className="sub-title">Mobile App</span>
                                    <h2>Download Our Mobile App</h2>
                                    <p>Our mobile app for secure, convenient banking anytime, anywhere.</p>
                                </div>
                                <div className="download-btn">
                                    <Link to="/index-2"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                    <Link to="/index-2"><i className="flaticon-apple"></i><span>App Store</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="working-section bg-color-2 centred">
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
                                <div className="icon-box"><img src="assets/images/icons/icon-67.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">02</span>
                                <h3>Documentation</h3>
                                <p>One rejects, dislikes avoids pleasure itself because it is who do not know.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-68.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">03</span>
                                <h3>A/c Verification</h3>
                                <p>Ever undertakes laborious physical exercise except in all advantages.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-69.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">04</span>
                                <h3>Start Banking</h3>
                                <p>Foresee the pain & trouble that are bound ensue equal blame belongs fail.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-70.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <Link to="/index-2">Start Your Account.</Link></h5>
                </div>
            </div>
        </section>
        


        
        <section className="news-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Blog Post</span>
                    <h2>Latest from Blog Post</h2>
                </div>
                <div className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                    <div className="news-block-one">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="upper-box">
                                    <div className="title-box">
                                        <h6><img src="assets/images/icons/icon-71.png" alt="" />Financial Planning</h6>
                                        <h5><span>By </span><Link to="/blog-details">D.Beckham</Link></h5>
                                    </div>
                                    <div className="post-date align-3">
                                        <h3>21</h3>
                                        <h6>Jul, 2025</h6>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h2><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h2>
                                    <div className="link-box">
                                        <ul className="post-info">
                                            <li><h5><img src="assets/images/icons/icon-72.png" alt="" />5 Mins Read</h5></li>
                                            <li><h5><img src="assets/images/icons/icon-73.png" alt="" />26 Comments</h5></li>
                                        </ul>
                                        <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        <div className="news-block-one style-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-71.png" alt="" />Business Banking</h6>
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
                                            <h5><img src="assets/images/icons/icon-72.png" alt="" />6 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news-block-one style-two">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-71.png" alt="" />Technology</h6>
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
                                            <h5><img src="assets/images/icons/icon-72.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-link pt_25 centred">
                    <Link to="/blog"><i className="flaticon-right-arrow"></i>More From Blog</Link>
                </div>
            </div>
        </section>
        


        
        <section className="deals-section sec-pad-2 bg-color-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Exclusive Offers</span>
                    <h2>Special Deals Just for You</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-74.png" alt="" /></div>
                                    <span className="category">Medical</span>
                                    <p>Expire On: 25th Oct’24</p>
                                </div>
                                <h3>Get 10% cashback on trust care medical.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-75.png" alt="" /></div>
                                    <span className="category">Restaurant</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Get 15% discount on classic cuisine restaurant.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-76.png" alt="" /></div>
                                    <span className="category">Electronics</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Tech zone electronics offers 20% discount.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-77.png" alt="" /></div>
                                    <span className="category">Movies</span>
                                    <p>Expire On: 10th Nov’24</p>
                                </div>
                                <h3>Book Your ticket in starlight cinema & get 5% off.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 newsletter-block">
                        <div className="newsletter-inner">
                            <div className="shape" style={{backgroundImage: 'url(assets/images/shape/shape-8.png)'}}></div>
                            <div className="icon-box"><img src="assets/images/icons/icon-78.png" alt="" /></div>
                            <div className="newsletter-content">
                                <h3>Newsletter</h3>
                                <p>Subscribe to get news, offers & other updates.</p>
                                <form method="post" action="contact.html">
                                    <div className="form-group">
                                        <div className="icon"><img src="assets/images/icons/icon-80.png" alt="" /></div>
                                        <input type="email" name="email" placeholder="Email address..." required />
                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Subscribe</span></button>
                                    </div>
                                </form>
                                <div className="lower-text"><img src="assets/images/icons/icon-81.png" alt="" />Relevant Updates, No Spam.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="awards-section pt_110 pb_110">
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
        


        
        <section className="clients-section centred">
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
        


        
        <section className="testimonial-section pt_110 pb_120">
            <div className="auto-container">
                <div className="inner-container">
                    <span className="big-text">Feedback</span>
                    <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                        <div className="testimonial-content">
                            <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt="" /></div>
                            <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                            <div className="author-inner">
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Account, NY</span>
                                </div>
                                <ul className="thumb-list">
                                    <li><img src="assets/images/resource/testimonial-2.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-3.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-4.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt="" /></div>
                            <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                            <div className="author-inner">
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Account, NY</span>
                                </div>
                                <ul className="thumb-list">
                                    <li><img src="assets/images/resource/testimonial-1.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-3.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-4.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt="" /></div>
                            <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                            <div className="author-inner">
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Account, NY</span>
                                </div>
                                <ul className="thumb-list">
                                    <li><img src="assets/images/resource/testimonial-2.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-1.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-4.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt="" /></div>
                            <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                            <div className="author-inner">
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Account, NY</span>
                                </div>
                                <ul className="thumb-list">
                                    <li><img src="assets/images/resource/testimonial-2.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-3.png" alt="" /></li>
                                    <li><img src="assets/images/resource/testimonial-1.png" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer-review">
                    <div className="review-text mr_20">
                        <div className="icon-box"><img src="assets/images/icons/icon-83.png" alt="" /></div>
                        <p>Google Reviews from 6.4k Happy Customers.</p>
                    </div>
                    <div className="rating-box">
                        <h2>4.8</h2>
                        <ul className="rating-list">
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                        </ul>
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
