import React from 'react'
import { Link } from 'react-router-dom'

export default function Team(){
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
                    <h1>Leadership</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Leadership</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="team-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Team Members</span>
                    <h2>Leadership & Executive Team</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Bret Ke Danielle</Link></h3>
                                    <span className="designation">Ceo & Founder</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Ian Hudson</Link></h3>
                                    <span className="designation">Cheif Operating Officer</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Lillian Stella</Link></h3>
                                    <span className="designation">Cheif Financial Officer</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Crise Jordan</Link></h3>
                                    <span className="designation">Corporate Marketing</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-5.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Rose Taylor</Link></h3>
                                    <span className="designation">Head of Corporate</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-6.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Sara Rosi</Link></h3>
                                    <span className="designation">Chief Investment Officer</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-7.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Rafeel Nidal</Link></h3>
                                    <span className="designation">Head of Retail Banking</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-8.jpg" alt="" /></figure>
                                    <ul className="social-links">
                                        <li><Link to="/team"><i className="flaticon-facebook"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link to="/team-details">Vanis Williams</Link></h3>
                                    <span className="designation">Chief Technology Officer</span>
                                    <form method="post" action="team.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></div>
                                            <input type="email" name="email" placeholder="Email me" required />
                                            <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
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
