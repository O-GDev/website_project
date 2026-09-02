import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards_3(){
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
                    <h1>Debit Card</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>Apply Now</li>
                        <li><span>Debit Card</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="cards-section pt_120 pb_110">
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
        


        
        <section className="cards-style-two pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                        <div className="cards-sidebar">
                            <div className="category-widget mb_30">
                                <div className="widget-title">
                                    <h3>Card Types</h3>
                                </div>
                                <ul className="category-list clearfix">
                                    <li><Link to="/cards">Business</Link></li>
                                    <li><Link to="/cards">Cashback</Link></li>
                                    <li><Link to="/cards">Low Interest</Link></li>
                                    <li><Link to="/cards">Rewards</Link></li>
                                    <li><Link to="/cards">Secured</Link></li>
                                    <li><Link to="/cards">Travel & Hotel</Link></li>
                                </ul>
                            </div>
                            <div className="contact-widget">
                                <div className="inner-box" style={{backgroundImage: 'url(assets/images/resource/sidebar-1.jpg)'}}>
                                    <h3>Now, Get Your Credit Card Online</h3>
                                    <span className="text">Approve with in 24 Hrs.</span>
                                    <Link to="/contact"><span>Apply Here</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                        <div className="content-box">
                            <div className="cards-block-one">
                                <div className="inner-box">
                                    <div className="cards-column">
                                        <h3><Link to="/card-details">Platinum Credit Card</Link></h3>
                                        <figure className="image-box"><img src="assets/images/resource/cards-1.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details">Apply Now</Link>
                                            <Link to="/card-details">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Explore a new world of rewards with the Platinum Credit Card.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
                                        </ul>
                                        <div className="check-box-two">
                                            <input className="check" type="checkbox" id="checkbox1" />
                                            <label htmlFor="checkbox1">Add to Compare</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-block-one">
                                <div className="inner-box">
                                    <div className="cards-column">
                                        <h3><Link to="/card-details-2">Millinnia Credit Card</Link></h3>
                                        <figure className="image-box"><img src="assets/images/resource/cards-2.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-2">Apply Now</Link>
                                            <Link to="/card-details-2">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
                                        </ul>
                                        <div className="check-box-two">
                                            <input className="check" type="checkbox" id="checkbox2" />
                                            <label htmlFor="checkbox2">Add to Compare</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-block-one">
                                <div className="inner-box">
                                    <div className="cards-column">
                                        <h3><Link to="/card-details-3">Money Back Credit Card</Link></h3>
                                        <figure className="image-box"><img src="assets/images/resource/cards-3.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-3">Apply Now</Link>
                                            <Link to="/card-details-3">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Explore a new world of rewards with the Platinum Credit Card.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
                                        </ul>
                                        <div className="check-box-two">
                                            <input className="check" type="checkbox" id="checkbox3" />
                                            <label htmlFor="checkbox3">Add to Compare</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-block-one">
                                <div className="inner-box">
                                    <div className="cards-column">
                                        <h3><Link to="/card-details-4">Easy EMI Credit Card</Link></h3>
                                        <figure className="image-box"><img src="assets/images/resource/cards-4.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-4">Apply Now</Link>
                                            <Link to="/card-details-4">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
                                        </ul>
                                        <div className="check-box-two">
                                            <input className="check" type="checkbox" id="checkbox4" />
                                            <label htmlFor="checkbox4">Add to Compare</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-block-one">
                                <div className="inner-box">
                                    <div className="cards-column">
                                        <h3><Link to="/card-details-5">Diners Club Privilege Card</Link></h3>
                                        <figure className="image-box"><img src="assets/images/resource/cards-5.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-5">Apply Now</Link>
                                            <Link to="/card-details-5">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
                                        </ul>
                                        <div className="check-box-two">
                                            <input className="check" type="checkbox" id="checkbox5" />
                                            <label htmlFor="checkbox5">Add to Compare</label>
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
