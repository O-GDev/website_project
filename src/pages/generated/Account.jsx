import React from 'react'
import PageTitle from '../../components/sections/PageTitle'
import { Link } from 'react-router-dom'

import Tabs from '../../components/ui/Tabs'
export default function Account(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Accounts"} crumbs={["Services"]} />
        


        
        <section className="custom-banking-two pb_90">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Savings Account</Link></h3>
                                    <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-6.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-161.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Current Account</Link></h3>
                                    <p>Duty through weakness of will, which is the same as saying through...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-7.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-162.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Family 360o</Link></h3>
                                    <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-8.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-163.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Senior Citizen</Link></h3>
                                    <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-9.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-164.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Demat Account</Link></h3>
                                    <p>Perfectly simple and easy to distinguish to the claims of duty ...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-10.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-165.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link to="/index-2">Business Accounts</Link></h3>
                                    <p>Duty through weakness of will, which is the same as saying through...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="/assets/images/resource/banking-11.jpg" alt="" /></figure>
                                    <div className="icon-box"><img src="/assets/images/icons/icon-166.png" alt="" /></div>
                                    <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="custom-banking sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-4.png)'}}></div>
            <div className="auto-container">
                <div className="title-box">
                    <div className="sec-title light">
                        <span className="sub-title">Custom Banking</span>
                        <h2>Banking For Your Needs</h2>
                    </div>
                    <div className="support-box">
                        <h5>Get Support</h5>
                        <div className="phone-box">
                            <div className="icon-box"><img src="/assets/images/icons/icon-26.png" alt="" /></div>
                            <a href="tel:49556789091">+49 55 678 90 & 91</a>
                            <span>9.00 am to 7.00 pm</span>
                        </div>
                    </div>
                </div>
                <Tabs className="tabs-box">
                    <figure className="support-image"><img src="/assets/images/banner/support.jpg" alt="" /></figure>
                    <div className="tab-btn-one">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li className="tab-btn active-btn" data-tab="#tab-9">Business</li>
                            <li className="tab-btn" data-tab="#tab-10">Individual</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-9">
                            <Tabs className="tabs-box-2">
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
                                                    <h4>Debit Cards</h4>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Debit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Debit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                            </Tabs>
                        </div>
                        <div className="tab" id="tab-10">
                            <Tabs className="tabs-box-2">
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
                                                    <h4>Debit Cards</h4>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Debit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Debit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                                                        <div className="icon-box"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
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
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="/assets/images/icons/icon-25.png" alt="" /></div>
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
                            </Tabs>
                        </div>
                    </div>
                </Tabs>
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
                                        <h4><img src="/assets/images/icons/icon-168.png" alt="" />Account Management</h4>
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
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
                                        <h4><img src="/assets/images/icons/icon-169.png" alt="" />Transaction Services</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
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
                                        <h4><img src="/assets/images/icons/icon-170.png" alt="" />Loan and Credit Services</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
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
                                        <h4><img src="/assets/images/icons/icon-171.png" alt="" />Mobile / Internet Banking</h4>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="row clearfix">
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Change Account Details</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
                                                            <span>Update Contact Information</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <Link to="/index-4">
                                                            <img src="/assets/images/icons/icon-147.png" alt="" />
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
                                <div className="icon"><img src="/assets/images/icons/icon-167.png" alt="" /></div>
                                <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-29.png)'}}></div>
                            </div>
                            <div className="support-box">
                                <figure className="image-box"><img src="/assets/images/resource/support-1.png" alt="" /></figure>
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
        


        
        <section className="apps-section sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(/assets/images/shape/shape-33.png)'}}></div>
                <div className="pattern-2" style={{backgroundImage: 'url(/assets/images/shape/shape-34.png)'}}></div>
            </div>
            <figure className="image-layer"><img src="/assets/images/resource/apps-3.png" alt="" /></figure>
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
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
