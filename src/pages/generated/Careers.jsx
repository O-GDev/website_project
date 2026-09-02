import React from 'react'
import { Link } from 'react-router-dom'

export default function Careers(){
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
                    <h1>Careers</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Careers</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="careers-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="careers-block-one">
                        <div className="inner-box">
                            <div className="title-box mb_25">
                                <div className="author-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-207.png" alt="" /></div>
                                    <span className="text">Job Role</span>
                                    <h3>Service Representative</h3>
                                </div>
                                <ul className="option-list">
                                    <li><span>Last Date: Sep 16, 2025</span></li>
                                    <li><button><img src="assets/images/icons/icon-208.png" alt="" /></button></li>
                                    <li><Link to="/careers"><img src="assets/images/icons/icon-209.png" alt="" /></Link></li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Department</span>
                                        <p>Finance Department</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Location</span>
                                        <p>Hamburg, German</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Experience</span>
                                        <p>5+ Years in Sector</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link to="/careers"><span>Read More</span></Link>
                                <Link to="/careers"><span>Apply Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="careers-block-one">
                        <div className="inner-box">
                            <div className="title-box mb_25">
                                <div className="author-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-207.png" alt="" /></div>
                                    <span className="text">Job Role</span>
                                    <h3>Operations Manager</h3>
                                </div>
                                <ul className="option-list">
                                    <li><span>Last Date: Sep 25, 2025</span></li>
                                    <li><button><img src="assets/images/icons/icon-208.png" alt="" /></button></li>
                                    <li><Link to="/careers"><img src="assets/images/icons/icon-209.png" alt="" /></Link></li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Department</span>
                                        <p>Sales & Marketing</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Location</span>
                                        <p>Wiesbaden, German</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Experience</span>
                                        <p>3+ Years in Sector</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link to="/careers"><span>Read More</span></Link>
                                <Link to="/careers"><span>Apply Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="careers-block-one">
                        <div className="inner-box">
                            <div className="title-box mb_25">
                                <div className="author-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-207.png" alt="" /></div>
                                    <span className="text">Job Role</span>
                                    <h3>Branch Manager</h3>
                                </div>
                                <ul className="option-list">
                                    <li><span>Last Date: Oct 15, 2025</span></li>
                                    <li><button><img src="assets/images/icons/icon-208.png" alt="" /></button></li>
                                    <li><Link to="/careers"><img src="assets/images/icons/icon-209.png" alt="" /></Link></li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Department</span>
                                        <p>Relationship Management</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Location</span>
                                        <p>California, USA</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Experience</span>
                                        <p>3+ Years in Sector</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link to="/careers"><span>Read More</span></Link>
                                <Link to="/careers"><span>Apply Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="careers-block-one">
                        <div className="inner-box">
                            <div className="title-box mb_25">
                                <div className="author-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-207.png" alt="" /></div>
                                    <span className="text">Job Role</span>
                                    <h3>Service Representative</h3>
                                </div>
                                <ul className="option-list">
                                    <li><span>Service Representative</span></li>
                                    <li><button><img src="assets/images/icons/icon-208.png" alt="" /></button></li>
                                    <li><Link to="/careers"><img src="assets/images/icons/icon-209.png" alt="" /></Link></li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Department</span>
                                        <p>Finance Department</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Location</span>
                                        <p>Hamburg, German</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Experience</span>
                                        <p>5+ Years in Sector</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link to="/careers"><span>Read More</span></Link>
                                <Link to="/careers"><span>Apply Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="careers-block-one">
                        <div className="inner-box">
                            <div className="title-box mb_25">
                                <div className="author-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-207.png" alt="" /></div>
                                    <span className="text">Job Role</span>
                                    <h3>Operations Manager</h3>
                                </div>
                                <ul className="option-list">
                                    <li><span>Last Date: Sep 25, 2025</span></li>
                                    <li><button><img src="assets/images/icons/icon-208.png" alt="" /></button></li>
                                    <li><Link to="/careers"><img src="assets/images/icons/icon-209.png" alt="" /></Link></li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <ul className="info-list clearfix">
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Department</span>
                                        <p>Sales & Marketing</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Location</span>
                                        <p>Wiesbaden, German</p>
                                    </li>
                                    <li>
                                        <div className="icon-box"><img src="assets/images/icons/icon-210.png" alt="" /></div>
                                        <span>Experience</span>
                                        <p>3+ Years in Sector</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link to="/careers"><span>Read More</span></Link>
                                <Link to="/careers"><span>Apply Now</span></Link>
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
