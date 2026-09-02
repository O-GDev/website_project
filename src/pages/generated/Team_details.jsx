import React from 'react'
import { Link } from 'react-router-dom'

export default function Team_details(){
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
                    <h1>Leadership Details</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>Leadership</li>
                        <li><span>Leadership Details</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="team-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box mr_30">
                            <figure className="image"><img src="assets/images/team/team-9.jpg" alt="" /></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <h3>Hi, I am</h3>
                            <h2>Bret Ke Danielle</h2>
                            <span className="designation">CEO & Founder</span>
                            <p>Indignation and dislike men who are so beguiled & demoralized by charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                            <h3>10 Years of Experience</h3>
                            <ul className="list-item mt_15 mb_30 clearfix">
                                <li>Demoralized by charms of pleasure of the moment</li>
                                <li>Again is there anyone who loves or pursues</li>
                            </ul>
                            <h3>Contact Me</h3>
                            <h5><img src="assets/images/icons/icon-3.png" alt="" /><a href="mailto:bretkedanielle@example.com">bretkedanielle@example.com</a></h5>
                            <ul className="social-links">
                                <li><Link to="/team-details"><i className="flaticon-facebook"></i></Link></li>
                                <li><Link to="/team-details"><i className="flaticon-twitter"></i></Link></li>
                                <li><Link to="/team-details"><i className="flaticon-instagram-logo"></i></Link></li>
                                <li><Link to="/team-details"><i className="flaticon-youtube"></i></Link></li>
                            </ul>
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
