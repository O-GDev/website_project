import React from 'react'
import CardsSection from '../../components/sections/CardsSection'
import PageTitle from '../../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function Cards_3(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Debit Card"} crumbs={["Apply Now"]} />
        


        
        <CardsSection modClass="pt_120 pb_110" />
        


        
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
                                <div className="inner-box" style={{backgroundImage: 'url(/assets/images/resource/sidebar-1.jpg)'}}>
                                    <h3>Now, Get Your Debit Card Online</h3>
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
                                        <h3><Link to="/card-details">Platinum Debit Card</Link></h3>
                                        <figure className="image-box"><img src="/assets/images/resource/cards-1.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details">Apply Now</Link>
                                            <Link to="/card-details">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Explore a new world of rewards with the Platinum Debit Card.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="/assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="/assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="/assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="/assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
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
                                        <h3><Link to="/card-details-2">Millinnia Debit Card</Link></h3>
                                        <figure className="image-box"><img src="/assets/images/resource/cards-2.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-2">Apply Now</Link>
                                            <Link to="/card-details-2">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="/assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="/assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="/assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="/assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
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
                                        <h3><Link to="/card-details-3">Money Back Debit Card</Link></h3>
                                        <figure className="image-box"><img src="/assets/images/resource/cards-3.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-3">Apply Now</Link>
                                            <Link to="/card-details-3">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Explore a new world of rewards with the Platinum Debit Card.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="/assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="/assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="/assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="/assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
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
                                        <h3><Link to="/card-details-4">Easy EMI Debit Card</Link></h3>
                                        <figure className="image-box"><img src="/assets/images/resource/cards-4.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-4">Apply Now</Link>
                                            <Link to="/card-details-4">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="/assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="/assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="/assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="/assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
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
                                        <figure className="image-box"><img src="/assets/images/resource/cards-5.jpg" alt="" /></figure>
                                        <div className="btn-box">
                                            <Link to="/card-details-5">Apply Now</Link>
                                            <Link to="/card-details-5">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="content-column">
                                        <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                        <h4>Features & Benefits</h4>
                                        <ul className="list-item">
                                            <li><img src="/assets/images/icons/icon-191.png" alt="" />Zero Joining and Annual Fees</li>
                                            <li><img src="/assets/images/icons/icon-192.png" alt="" />2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                            <li><img src="/assets/images/icons/icon-193.png" alt="" />Multi Rewards & Lifestyle Benefits</li>
                                            <li><img src="/assets/images/icons/icon-194.png" alt="" />5X TAT Miles on Travel</li>
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
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
