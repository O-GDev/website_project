import React from 'react'
import { Link } from 'react-router-dom'

import NiceSelect from '../../components/ui/NiceSelect'
import Tabs from '../../components/ui/Tabs'
export default function Contact(){
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
                    <h1>Get in Touch</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li><span>Get in Touch</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="corporate-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Corporate Office</span>
                    <h2>Connect with Corporate Team</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                        <div className="corporate-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-227.png" alt="" /></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-228.png" alt="" /></div>
                                </div>
                                <h4>Dial Us</h4>
                                <p>For Instant Help and Friendly Service.</p>
                                <h5><a href="tel:080089612345678">0800 896 1234 & 5678</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                        <div className="corporate-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-230.png" alt="" /></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-231.png" alt="" /></div>
                                </div>
                                <h4>Mail Us</h4>
                                <p>Questions? Mail us, and we’ll handle the rest.</p>
                                <h5><a href="mailto:getsupport@example.com">getsupport@example.com</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                        <div className="corporate-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-232.png" alt="" /></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-233.png" alt="" /></div>
                                </div>
                                <h4>Address</h4>
                                <p>Your Destination for banking Service.</p>
                                <h5>14 Hackescher Markt, Mitte 10115, German.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                        <div className="corporate-block-one">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <div className="icon"><img src="assets/images/icons/icon-234.png" alt="" /></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-235.png" alt="" /></div>
                                </div>
                                <h4>Banking Hours</h4>
                                <p>Flexible Banking Hours, Just for You.</p>
                                <h5>Mon-Sat: 9am to 5pm <span>[2nd Sat Holiday]</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="branches-section pt_120 pb_120">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-48.png)'}}></div>
            <span className="big-text">& Atm’s <br />Branches</span>
            <div className="auto-container">
                <div className="content-box">
                    <h3>Over 280 Branches & ATM’s Nationwide</h3>
                    <Tabs className="tabs-box">
                        <div className="tab-btns tab-buttons mb_25">
                            <div className="tab-btn active-btn" data-tab="#tab-1"><h5>Branches</h5></div>
                            <div className="tab-btn" data-tab="#tab-2"><h5>ATM’s</h5></div>
                        </div>
                        <div className="tabs-content">
                            <div className="tab active-tab" id="tab-1">
                                <div className="inner-box">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt="" /></div>
                                        <input type="text" name="location" placeholder="Current Location" />
                                    </div>
                                    <div className="text">[or]</div>
                                    <div className="form-group">
                                        <input type="text" name="city" placeholder="City name: Hamburg" />
                                    </div>
                                    <div className="link-box"><a href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                                </div>
                            </div>
                            <div className="tab" id="tab-2">
                                <div className="inner-box">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt="" /></div>
                                        <input type="text" name="location" placeholder="Current Location" />
                                    </div>
                                    <div className="text">[or]</div>
                                    <div className="form-group">
                                        <input type="text" name="city" placeholder="City name: Hamburg" />
                                    </div>
                                    <div className="link-box"><a href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
            <div className="map-inner">
                <div className="map-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd" width="100%" height="500" frameborder="0" style={{border: 0, width: '100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="map-content">
                    <h4>St. Georg, Hamburg</h4>
                    <p>26 Maggie St, Little South <br />Slope, 22763.</p>
                    <h5><a href="tel:08008961234">0800 896 1234</a></h5>
                </div>
            </div>
        </section>
        


        
        <section className="contact-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Send Message</span>
                    <h2>Message Our Support Team</h2>
                </div>
                <Tabs className="tabs-box">
                    <div className="tab-btns tab-buttons clearfix">
                        <div className="tab-btn active-btn" data-tab="#tab-3"><h4>Personal Banking</h4></div>
                        <div className="tab-btn" data-tab="#tab-4"><h4>Corporate Banking</h4></div>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-3">
                            <div className="form-inner">
                                        <form method="post" action="/Flexibank/sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt="" /></div>
                                                <label>Your Name</label>
                                                <input type="text" name="username" placeholder="Enter name here" required />
                                            </div>
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt="" /></div>
                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="Email address" required />
                                            </div>
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt="" /></div>
                                                <label>Phone</label>
                                                <input type="text" name="phone" placeholder="Phone number" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Reason for Contact</label>
                                                <div className="select-box">
                                                    <NiceSelect >
                                                       <option data-display="Bill Payment Inquiries">Bill Payment Inquiries</option>
                                                       <option defaultValue="1">Branches</option>
                                                       <option defaultValue="2">Customer Care</option>
                                                       <option defaultValue="3">News & Media</option>
                                                    </NiceSelect>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-236.png" alt="" /></div>
                                                <label>Message</label>
                                                <textarea name="message" placeholder="Message goes here"></textarea>
                                            </div>
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn" name="submit-form"><span>Send Your Message</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab" id="tab-4">
                            <div className="form-inner">
                                <form method="post" action="/Flexibank/sendemail.php" id="contact-form2">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt="" /></div>
                                                <label>Your Name</label>
                                                <input type="text" name="username" placeholder="Enter name here" required />
                                            </div>
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt="" /></div>
                                                <label>Email</label>
                                                <input type="email" name="email" placeholder="Email address" required />
                                            </div>
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt="" /></div>
                                                <label>Phone</label>
                                                <input type="text" name="phone" placeholder="Phone number" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Reason for Contact</label>
                                                <div className="select-box">
                                                    <NiceSelect >
                                                       <option data-display="Bill Payment Inquiries">Bill Payment Inquiries</option>
                                                       <option defaultValue="1">Branches</option>
                                                       <option defaultValue="2">Customer Care</option>
                                                       <option defaultValue="3">News & Media</option>
                                                    </NiceSelect>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-236.png" alt="" /></div>
                                                <label>Message</label>
                                                <textarea name="message" placeholder="Message goes here"></textarea>
                                            </div>
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn" name="submit-form"><span>Send Your Message</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
        


        
        <section className="support-section sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Customer Care</span>
                    <h2>Connect with Customer Care</h2>
                </div>
                <div className="inner-container">
                    <div className="table-outer">
                        <table>
                            <thead className="cart-header">
                                <tr>
                                    <th>Services</th>
                                    <th>Contact Details</th>
                                </tr>    
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h5>General Query/Complaint</h5></td>
                                    <td><span><a href="tel:844123456789">+844 123 4567 89</a> (Toll Free)</span><span><a href="mailto:customercare@example.com">customercare@example.com</a></span></td>
                                </tr>
                                <tr>
                                    <td><h5>Credit Card</h5></td>
                                    <td><span><a href="tel:844789012345">+844 789 0123 45</a></span><span><a href="mailto:creditcard@example.com">creditcard@example.com</a></span></td>
                                </tr>
                            </tbody>    
                        </table>
                        <div className="more-text centred">
                            <h5><i className="flaticon-sparkle"></i>Have Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
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
