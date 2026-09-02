import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog_3(){
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
                        <li><span>List View 01</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="sidebar-page-container blog-list-one pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="blog-list-content">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-23.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-23.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-23.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h2>
                                            <p>Don’t just save money, make more money with a checking account from us obligations of business will frequently occur power choice of business.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />26 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />345 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-24.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-24.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-24.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h2>
                                            <p>Duty obligations of business it will frequently occur our power of choice is when othing prevents our being able to do what we like best, every pleasure.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />6 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />186 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-25.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-25.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-25.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">Growth Strategies for Your Small Business.</Link></h2>
                                            <p>Accepted repudiated and when nothing prevents claims of duty obligations of business it will frequently occur our power of choice.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />6 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />10 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />45 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-26.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-26.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-26.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">How to Improve Your Credit Score Tips & Tricks.</Link></h2>
                                            <p>Don’t just save money, make more money with a checking account from us obligations of business will frequently occur power choice of business.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />26 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />345 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-27.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-27.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-27.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h2>
                                            <p>Duty obligations of business it will frequently occur our power of choice is when othing prevents our being able to do what we like best, every pleasure.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />6 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />186 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link to="/blog-details"><img src="assets/images/news/news-28.jpg" alt="" /></Link></figure>
                                        <figure className="overlay-image"><Link to="/blog-details"><img src="assets/images/news/news-28.jpg" alt="" /></Link></figure>
                                        <div className="view-btn"><a href="assets/images/news/news-28.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt="" /></a></div>
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
                                            <h2><Link to="/blog-details">Growth Strategies for Your Small Business.</Link></h2>
                                            <p>Accepted repudiated and when nothing prevents claims of duty obligations of business it will frequently occur our power of choice.</p>
                                            <div className="link-box">
                                                <ul className="post-info">
                                                    <li><h5><img src="assets/images/icons/icon-37.png" alt="" />6 Mins Read</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-211.png" alt="" />10 Comments</h5></li>
                                                    <li><h5><img src="assets/images/icons/icon-212.png" alt="" />45 Views</h5></li>
                                                </ul>
                                                <Link to="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrapper pt_10">
                                <ul className="pagination clearfix">
                                    <li><Link to="/blog-3"><i className="flaticon-next"></i></Link></li>
                                    <li><Link to="/blog-3">01</Link></li>
                                    <li><Link to="/blog-3">02</Link></li>
                                    <li><Link to="/blog-3">03</Link></li>
                                    <li><Link to="/blog-3"><i className="flaticon-next"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="blog-sidebar ml_20">
                            <div className="sidebar-widget search-widget mb_40">
                                <form method="post" action="blog-3.html">
                                    <div className="form-group">
                                        <input type="search" name="search-field" placeholder="Search..." required />
                                        <button type="submit"><img src="assets/images/icons/icon-7.png" alt="" /></button>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-widget category-widget mb_35">
                                <div className="widget-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link to="/blog-details"><span>Account</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Business Planning</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Credit Card</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Financial Planning</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Investing</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Loans</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                        <li><Link to="/blog-details"><span>Technology</span><img src="assets/images/icons/icon-213.png" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget post-widget">
                                <div className="widget-title">
                                    <h3>Popular Post</h3>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><img src="assets/images/news/post-1.jpg" alt="" /><a href="assets/images/news/post-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-215.png" alt="" /></a></figure>
                                        <h4><Link to="/blog-details">How to Improve Your CreditScore Tips & Tricks.</Link></h4>
                                        <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><img src="assets/images/news/post-2.jpg" alt="" /><a href="assets/images/news/post-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-215.png" alt="" /></a></figure>
                                        <h4><Link to="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h4>
                                        <h5><img src="assets/images/icons/icon-37.png" alt="" />4 Mins Read</h5>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><img src="assets/images/news/post-3.jpg" alt="" /><a href="assets/images/news/post-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-215.png" alt="" /></a></figure>
                                        <h4><Link to="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h4>
                                        <h5><img src="assets/images/icons/icon-37.png" alt="" />5 Mins Read</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget tags-widget">
                                <div className="widget-title">
                                    <h3>Popular Tags</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link to="/blog-details">Account</Link></li>
                                        <li><Link to="/blog-details">Online Banking</Link></li>
                                        <li><Link to="/blog-details">Mobile Banking</Link></li>
                                        <li><Link to="/blog-details">Deposits</Link></li>
                                        <li><Link to="/blog-details">Withdrawals</Link></li>
                                        <li><Link to="/blog-details">Loans</Link></li>
                                        <li><Link to="/blog-details">Business</Link></li>
                                    </ul>
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
