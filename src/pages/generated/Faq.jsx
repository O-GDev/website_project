import React from 'react'
import { Link } from 'react-router-dom'

export default function Faq(){
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
                    <h1>Faq’s</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Faq’s</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="faq-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-46.png)'}}></div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Faq’s</span>
                    <h2>Read Questions & Answers</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 category-column">
                        <div className="category-box">
                            <h3>Categories</h3>
                            <p>Wide range of topics to address common queries.</p>
                            <ul className="category-list clearfix">
                                <li><Link to="/">Account</Link></li>
                                <li><Link to="/">Online Banking</Link></li>
                                <li><Link to="/">Mobile Banking</Link></li>
                                <li><Link to="/">Deposits</Link></li>
                                <li><Link to="/">Withdrawals</Link></li>
                                <li><Link to="/">Loans</Link></li>
                                <li><Link to="/">Business</Link></li>
                            </ul>
                            <div className="lower-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt="" /></div>
                                <h5>Can't Find What You Need?</h5>
                                <Link to="/"><i className="flaticon-right-arrow"></i>Submit Queries</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
                        <ul className="accordion-box">
                            <li className="accordion block active-block">
                                <div className="acc-btn active">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>01</span>How do I open a new account?</h4>
                                </div>
                                <div className="acc-content current">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>02</span>How can I check my account balance?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>03</span>Is online banking secure?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>04</span>What is the daily ATM withdrawal limit?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>05</span>How do I apply for a loan?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>06</span>Is online banking secure?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>07</span>What is the daily ATM withdrawal limit?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className="acc-btn">
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>08</span>How do I apply for a loan?</h4>
                                </div>
                                <div className="acc-content">
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
