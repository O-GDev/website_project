import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="outer-container">
          <div className="top-inner pr_30">
            <div className="left-column">
              <ul className="info-list">
                <li className="looking-box">
                  <div className="icon-box"><img src="/assets/images/icons/icon-1.png" alt=""/></div>
                  <h5>Looking:</h5>
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Personal">Personal</option>
                      <option value="1">Personal 2</option>
                      <option value="2">Personal 3</option>
                    </select>
                  </div>
                </li>
                <li className="login-box pr_30">
                  <div className="icon-box"><img src="/assets/images/icons/icon-2.png" alt=""/></div>
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Login">Login</option>
                      <option value="1">Logout</option>
                      <option value="2">Signup</option>
                    </select>
                  </div>
                </li>
                <li className="mail-box">
                  <div className="icon-box"><img src="/assets/images/icons/icon-3.png" alt=""/></div>
                  <a href="mailto:getsupport@example.com">getsupport@example.com</a>
                </li>
              </ul>
            </div>
            <div className="right-column">
              <ul className="option-list p_relative pr_30 mr_30">
                <li><img src="/assets/images/icons/icon-4.png" alt=""/><Link to="/careers">Careers</Link></li>
                <li><Link to="/faq">Faq’s</Link></li>
                <li><Link to="/">Business</Link></li>
                <li><Link to="/">Rewards</Link></li>
              </ul>
              <div className="language-box">
                <div className="icon-box"><img src="/assets/images/icons/icon-5.png" alt=""/></div>
                <div className="select-box">
                  <select className="wide">
                    <option data-display="Us - En">Us - En</option>
                    <option value="1">Uk - En</option>
                    <option value="2">Canada - En</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="outer-container">
          <div className="outer-box">
            <div className="menu-area">
              <div className="logo-box mr_110">
                <figure className="logo"><Link to="/"><img src="/assets/images/logo.png" alt=""/></Link></figure>
              </div>
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current"><Link to="/">Home</Link></li>
                    <li className="dropdown"><a href="#">Services</a>
                      <ul>
                        <li className="dropdown"><a href="#">Accounts</a>
                          <ul>
                            <li><Link to="/account">All Accounts</Link></li>
                            <li><Link to="/account-details">Savings Account</Link></li>
                            <li><Link to="/account-details-2">Current Account</Link></li>
                            <li><Link to="/account-details-3">Family 360º</Link></li>
                            <li><Link to="/account-details-4">Senior Citizen</Link></li>
                            <li><Link to="/account-details-5">Demat Account</Link></li>
                            <li><Link to="/account-details-6">Business Account</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="#">Investments</a>
                          <ul>
                            <li><Link to="/investments-details">Trade FX</Link></li>
                            <li><Link to="/investments-details-2">Multi Currency a/c</Link></li>
                            <li><Link to="/investments-details-3">Mutual Funds</Link></li>
                            <li><Link to="/investments-details-4">Insurance</Link></li>
                            <li><Link to="/investments-details-5">Tax-Deferred Investment</Link></li>
                            <li><Link to="/investments-details-6">Investment Advisory</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="#">Cards</a>
                          <ul>
                            <li><Link to="/cards">All Cards</Link></li>
                            <li><Link to="/card-details">Platinum Card</Link></li>
                            <li><Link to="/card-details-2">Millinnia Card</Link></li>
                            <li><Link to="/card-details-3">Money Back Card</Link></li>
                            <li><Link to="/card-details-4">Easy EMI Card</Link></li>
                            <li><Link to="/card-details-5">Dinners Club Privilege</Link></li>
                            <li><Link to="/card-details-6">Titanium Times</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">About</a>
                      <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li className="dropdown"><a href="#">Leadership</a>
                          <ul>
                            <li><Link to="/team">Leadership</Link></li>
                            <li><Link to="/team-details">Leadership Details</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="#">Careers</a>
                          <ul>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/career-details">Career Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/faq">Faq’s</Link></li>
                        <li><Link to="/testimonial">Testimonials</Link></li>
                        <li><Link to="/error">404</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">News</a>
                      <ul>
                        <li><Link to="/blog">Grid View 01</Link></li>
                        <li><Link to="/blog-2">Grid View 02</Link></li>
                        <li><Link to="/blog-3">List View 01</Link></li>
                        <li><Link to="/blog-4">List View 02</Link></li>
                        <li><Link to="/blog-details">Single Post</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#">Apply Now</a>
                      <ul>
                        <li className="dropdown"><a href="#">Loans</a>
                          <ul>
                            <li><Link to="/loans-1">Home Loan</Link></li>
                            <li><Link to="/loans-2">Personal Loan</Link></li>
                            <li><Link to="/loans-3">Vehicle Loan</Link></li>
                            <li><Link to="/loans-4">Education Loan</Link></li>
                            <li><Link to="/loans-5">Gold Loan</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/cards-2">Credit Card</Link></li>
                        <li><Link to="/cards-3">Debit Card</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Get In Touch</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-right-content">
              <div className="search-box search-toggler pr_30 mr_30"><span>Search</span> <img src="/assets/images/icons/icon-7.png" alt=""/></div>
              <div className="support-box mr_50"><img src="/assets/images/icons/icon-8.png" alt=""/><Link to="/">Support</Link></div>
              <div className="btn-box mr_10"><Link to="/" className="theme-btn"><span>New Account</span></Link></div>
              <div className="nav-toggler">
                <button type="button" className="side-panel-btn nav-btn"><img src="/assets/images/icons/icon-10.png" alt=""/></button>
                <div className="side-panel nav-content">
                  <div className="close-icon"><i className="fas fa-times"></i></div>
                  <div className="tabs-box">
                    <div className="tab-btns tab-buttons mb_25">
                      <div className="tab-btn active-btn" data-tab="#branches-btn"><h5>Branches</h5></div>
                      <div className="tab-btn" data-tab="#atm-btn"><h5>ATM’s</h5></div>
                    </div>
                    <div className="tabs-content">
                      <div className="tab active-tab" id="branches-btn">
                        <div className="inner-box">
                          <div className="form-group">
                            <div className="icon-box"><img src="/assets/images/icons/icon-86.png" alt=""/></div>
                            <input type="text" name="location" placeholder="Current Location"/>
                          </div>
                          <div className="text">[or]</div>
                          <div className="form-group">
                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                          </div>
                          <div className="link-box"><a href="https://www.google.com/maps" target="_blank" rel="noreferrer"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                        </div>
                      </div>
                      <div className="tab" id="atm-btn">
                        <div className="inner-box">
                          <div className="form-group">
                            <div className="icon-box"><img src="/assets/images/icons/icon-86.png" alt=""/></div>
                            <input type="text" name="location" placeholder="Current Location"/>
                          </div>
                          <div className="text">[or]</div>
                          <div className="form-group">
                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                          </div>
                          <div className="link-box"><a href="https://www.google.com/maps" target="_blank" rel="noreferrer"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="outer-container">
          <div className="outer-box">
            <div className="menu-area">
              <div className="logo-box mr_110">
                <figure className="logo"><Link to="/"><img src="/assets/images/logo.png" alt=""/></Link></figure>
              </div>
              <nav className="main-menu clearfix">
                {/* Keep empty - menu will be copied here by script.js */}
              </nav>
            </div>
            <div className="menu-right-content">
              <div className="search-box search-toggler pr_30 mr_30"><span>Search</span> <img src="/assets/images/icons/icon-7.png" alt=""/></div>
              <div className="support-box mr_50"><img src="/assets/images/icons/icon-8.png" alt=""/><Link to="/">Support</Link></div>
              <div className="btn-box mr_10"><Link to="/" className="theme-btn"><span>New Account</span></Link></div>
              <div className="nav-toggler">
                <button type="button" className="side-panel-btn nav-btn-2"><img src="/assets/images/icons/icon-10.png" alt=""/></button>
                <div className="side-panel nav-content-2">
                  <div className="close-icon"><i className="fas fa-times"></i></div>
                  <div className="tabs-box">
                    <div className="tab-btns tab-buttons mb_25">
                      <div className="tab-btn active-btn" data-tab="#branches-btn2"><h5>Branches</h5></div>
                      <div className="tab-btn" data-tab="#atm-btn2"><h5>ATM’s</h5></div>
                    </div>
                    <div className="tabs-content">
                      <div className="tab active-tab" id="branches-btn2">
                        <div className="inner-box">
                          <div className="form-group">
                            <div className="icon-box"><img src="/assets/images/icons/icon-86.png" alt=""/></div>
                            <input type="text" name="location" placeholder="Current Location"/>
                          </div>
                          <div className="text">[or]</div>
                          <div className="form-group">
                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                          </div>
                          <div className="link-box"><a href="https://www.google.com/maps" target="_blank" rel="noreferrer"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                        </div>
                      </div>
                      <div className="tab" id="atm-btn2">
                        <div className="inner-box">
                          <div className="form-group">
                            <div className="icon-box"><img src="/assets/images/icons/icon-86.png" alt=""/></div>
                            <input type="text" name="location" placeholder="Current Location"/>
                          </div>
                          <div className="text">[or]</div>
                          <div className="form-group">
                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                          </div>
                          <div className="link-box"><a href="https://www.google.com/maps" target="_blank" rel="noreferrer"><i className="flaticon-right-arrow"></i>Find On Map</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        <nav className="menu-box">
          <div className="nav-logo"><Link to="/"><img src="/assets/images/logo-2.png" alt="" title=""/></Link></div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><a href="tel:+8801682648101">+88 01682648101</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><Link to="/"><span className="fab fa-twitter"></span></Link></li>
              <li><Link to="/"><span className="fab fa-facebook-square"></span></Link></li>
              <li><Link to="/"><span className="fab fa-pinterest-p"></span></Link></li>
              <li><Link to="/"><span className="fab fa-instagram"></span></Link></li>
              <li><Link to="/"><span className="fab fa-youtube"></span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
