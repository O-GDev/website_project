import React from 'react'
import { Link } from 'react-router-dom'

export default function Career_details(){
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
                    <h1>Career Details</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>Careers</li>
                        <li><span>Career Details</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="career-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="career-details-content">
                            <div className="upper-box">
                                <span className="text">Finance Department</span>
                                <h3>Sales Representative</h3>
                                <span className="location"><img src="assets/images/icons/icon-210.png" alt="" />Hamburg, German</span>
                                <div className="btn-box"><Link to="/career-details"><i className="flaticon-right-arrow"></i><span>Apply Now</span></Link></div>
                            </div>
                            <div className="content-one mb_35">
                                <h3>Job Description</h3>
                                <p>To take a trivial example, which of us ever undertake laborious physical exercise except to obtain some to advantage from it? But who has any right to find off fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                                <p>Exercise except to obtain some advantage from it? But who has any right to find fault with a man who all chooses to enjoy a pleasure that has no annoying consequences.</p>
                            </div>
                            <div className="content-two mb_35">
                                <h3>Responsibilities</h3>
                                <ul className="list-item clearfix">
                                    <li>Don’t just make a deposit, make an investment today</li>
                                    <li>Known for trust, honesty, and customer care</li>
                                    <li>We’re more than just someone’s ATM. We’re here for life’s big moments</li>
                                    <li>A bank for people who want to live life better</li>
                                </ul>
                            </div>
                            <div className="content-two mb_50">
                                <h3>Requirements</h3>
                                <ul className="list-item clearfix">
                                    <li><h5>Age</h5>:&nbsp;&nbsp;&nbsp;&nbsp;28+</li>
                                    <li><h5>Pronoun</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Male / Female</li>
                                    <li><h5>Education</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Bachelor’s Degree in Related Field</li>
                                    <li><h5>Experience</h5>:&nbsp;&nbsp;&nbsp;&nbsp;1-3 Yrs</li>
                                    <li><h5>Skills</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Something Related this Job</li>
                                </ul>
                            </div>
                            <div className="social-box">
                                <ul className="social-links">
                                    <li><Link to="/career-details"><i className="fab fa-facebook-f"></i><span>Facebook</span></Link></li>
                                    <li><Link to="/career-details"><i className="fab fa-twitter"></i><span>Twitter</span></Link></li>
                                    <li><Link to="/career-details"><i className="fab fa-google-plus-g"></i><span>Google +</span></Link></li>
                                    <li><Link to="/career-details"><i className="fab fa-linkedin-in"></i><span>Linkedin</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="career-sidebar ml_30">
                            <div className="upload-box">
                                <input type="file" name="upload-file" />
                                <label><i className="flaticon-right-arrow"></i><span>Upload Your Resume</span></label>
                            </div>
                            <div className="info-box">
                                <ul className="info-list">
                                    <li>
                                        <h5>Salary</h5>
                                        <p>$85,000 - $90,000 Per Year</p>
                                    </li>
                                    <li>
                                        <h5>Vacancy</h5>
                                        <p>2 Vacancy Available</p>
                                    </li>
                                    <li>
                                        <h5>Allowances</h5>
                                        <p>Medical Expenses & Travel</p>
                                    </li>
                                    <li>
                                        <h5>Paid Leave</h5>
                                        <p>26 Days of Annual Leave</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="support-box">
                                <figure className="image-box"><img src="assets/images/resource/support-1.png" alt="" /></figure>
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
        


        



        
        <div className="scroll-to-top">
            <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
