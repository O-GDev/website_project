import React from 'react'
import { Link } from 'react-router-dom'

export default function Testimonial(){
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
                    <h1>Testimonials</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Testimonials</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="testimonial-style-two pt_120 pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Highly Trustworthy</h3>
                                <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>User Friendly</h3>
                                <p>This credit card has transformed my shopping experience with amazing rewards & transactions.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-8.png" alt="" /></figure>
                                    <h4>Francis Emmet</h4>
                                    <span className="designation">Business Account Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Highly Trustworthy</h3>
                                <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Fast Transactions</h3>
                                <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt="" /></figure>
                                    <h4>Dexter Clinton</h4>
                                    <span className="designation">Savings Account Holder,</span>
                                    <span className="text">California.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Highly Trustworthy</h3>
                                <p>Exceptional service! The staff are knowledgeable and always ready to help. Banking with them has been a breeze—highly recommend for anyone looking for reliable financial services.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-9.png" alt="" /></figure>
                                    <h4>Boris Elbert</h4>
                                    <span className="designation">Personal Loan Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Fast Transactions</h3>
                                <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                    <h4>Dexter Clinton</h4>
                                    <span className="designation">Savings Account Holder,</span>
                                    <span className="text">California.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>User Friendly</h3>
                                <p>Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like flexibank.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt="" /></figure>
                                    <h4>Francis Emmet</h4>
                                    <span className="designation">Business Account Holder,</span>
                                    <span className="text">Newyork.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>Fast Transactions</h3>
                                <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-10.png" alt="" /></figure>
                                    <h4>Dexter Clinton</h4>
                                    <span className="designation">Savings Account Holder,</span>
                                    <span className="text">California.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block-one">
                            <div className="inner-box">
                                <div className="rating"><i className="flaticon-star"></i><span>Rated 4.5/5</span></div>
                                <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt="" /></div>
                                <h3>User Friendly</h3>
                                <p>Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like flexibank.</p>
                                <div className="author-box">
                                    <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                                    <h4>Francis Emmet</h4>
                                    <span className="designation">Business Account Holder,</span>
                                    <span className="text">Newyork.</span>
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
