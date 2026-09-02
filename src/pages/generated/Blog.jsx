import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog(){
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
                    <h1>Blog Post</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>News</li>
                        <li><span>Grid View 01</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="news-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-13.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-13.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-13.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Financial Planning</h6>
                                            <h5><span>By </span><Link to="/blog-details">D.Beckham</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>21</h3>
                                            <h6>Jul, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-14.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-14.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-14.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Credit Card</h6>
                                            <h5><span>By </span><Link to="/blog-details">Vk.Christopher</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>06</h3>
                                            <h6>Jul, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Business Banking</h6>
                                            <h5><span>By </span><Link to="/blog-details">Z.Benjamin</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>15</h3>
                                            <h6>Jun, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />6 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-7.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-7.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Technology</h6>
                                            <h5><span>By </span><Link to="/blog-details">L.Nathaniel</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>31</h3>
                                            <h6>May, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-8.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-8.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-8.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Financial Planning</h6>
                                            <h5><span>By </span><Link to="/blog-details">L.D.Beckham</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>21</h3>
                                            <h6>Jul, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-9.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-9.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-9.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Credit Card</h6>
                                            <h5><span>By </span><Link to="/blog-details">Vk.Christopher</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>06</h3>
                                            <h6>Jul, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-10.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-10.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-10.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Business Banking</h6>
                                            <h5><span>By </span><Link to="/blog-details">Z.Benjamin</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>15</h3>
                                            <h6>Jun, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />6 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-11.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-11.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-11.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Technology</h6>
                                            <h5><span>By </span><Link to="/blog-details">L.Nathaniel</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>31</h3>
                                            <h6>May, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-12.jpg" alt="" /></Link></figure>
                                    <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-12.jpg" alt="" /></Link></figure>
                                    <div className="view-btn"><a href="assets/images/news/news-12.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
                                </div>
                                <div className="content-box">
                                    <div className="upper-box">
                                        <div className="title-box">
                                            <h6><img src="assets/images/icons/icon-36.png" alt="" />Financial Planning</h6>
                                            <h5><span>By </span><Link to="/blog-details">D.Beckham</Link></h5>
                                        </div>
                                        <div className="post-date align-3">
                                            <h3>21</h3>
                                            <h6>Jul, 2025</h6>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h3><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                        <div className="link-box">
                                            <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                            <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-wrapper centred pt_30">
                    <ul className="pagination clearfix">
                        <li><Link to="/blog"><i className="flaticon-next"></i></Link></li>
                        <li><Link to="/blog">01</Link></li>
                        <li><Link to="/blog">02</Link></li>
                        <li><Link to="/blog">03</Link></li>
                        <li><Link to="/blog"><i className="flaticon-next"></i></Link></li>
                    </ul>
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
