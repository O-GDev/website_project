import React from 'react'
import { Link } from 'react-router-dom'

export default function Loans_2(){
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
                    <h1>Apply Now</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>Apply Now</li>
                        <li><span>Personal Loan</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="cards-section pt_120">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="upper-content">
                        <figure className="card-image p_absolute t_0 r_0"><img src="assets/images/resource/card-1.png" alt="" /></figure>
                        <div className="content-box">
                            <div className="sec-title">
                                <h2>More than just <br />a card-It’s freedom...</h2>
                                <p>Welcomed and every pain avoidedduty or the obligations of business our power of choice.</p>
                            </div>
                            <ul className="list-style-one clearfix">
                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Exclusive discounts <br />and offers</li>
                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Advanced security <br />features</li>
                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Generous Rewards <br />Program</li>
                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>Flexible Credit <br />Limits</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="more-text">
                            <h5><i className="flaticon-sparkle"></i>Unlock Exclusive Rewards, <Link to="/">Apply Now</Link> and Elevate your Everyday Spending.</h5>
                        </div>
                        <div className="btn-box">
                            <Link to="/cards"><span>Enquire Now</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="working-section alternat-2 centred">
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
                                <div className="icon-box"><img src="assets/images/icons/icon-184.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">02</span>
                                <h3>Documentation</h3>
                                <p>One rejects, dislikes avoids pleasure itself because it is who do not know.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-185.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">03</span>
                                <h3>A/c Verification</h3>
                                <p>Ever undertakes laborious physical exercise except in all advantages.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-186.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">04</span>
                                <h3>Start Banking</h3>
                                <p>Foresee the pain & trouble that are bound ensue equal blame belongs fail.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-187.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <Link to="/index-2">Start Your Account.</Link></h5>
                </div>
            </div>
        </section>
        


        
        <section className="appointment-section pt_120 pb_120">
            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/appointment-bg.jpg)'}}></div>
            <span className="big-text">Appointment <br />Make an</span>
            <div className="auto-container">
                <div className="appointment-form">
                    <form action="loans-1.html" method="post">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt="" /></div>
                                    <label>Your Name</label>
                                    <input type="text" name="name" placeholder="Enter name here" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt="" /></div>
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email address" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt="" /></div>
                                    <label>Phone</label>
                                    <input type="text" name="phone" placeholder="Phone number" required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-224.png" alt="" /></div>
                                    <label>Date</label>
                                    <input type="text" name="date" placeholder="Date" id="datepicker" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-225.png" alt="" /></div>
                                    <label>Time</label>
                                    <input type="text" name="time" placeholder="Time" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img src="assets/images/icons/icon-226.png" alt="" /></div>
                                    <label>Address</label>
                                    <input type="text" name="name" placeholder="Your address" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="message-btn pt_7">
                                    <button type="submit" className="theme-btn"><span>Send Your Request</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
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
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
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
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
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
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
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
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
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
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
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
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
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
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
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
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
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
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
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
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
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
        


        



        
        <div className="scroll-to-top">
            <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     

    
    


    </>
  )
}
