import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="main-footer">
      <div className="pattern-layer" style={{backgroundImage:'url(/assets/images/shape/shape-4.png)'}}></div>
      <div className="widget-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
              <div className="footer-widget contact-widget mr_100">
                <div className="widget-content">
                  <div className="schedule-inner">
                    <div className="contact-info">
                      <h3>Enquiry</h3>
                      <ul className="list-item clearfix">
                        <li><a href="tel:08008961234">0800 896 1234</a> <span>(Toll Free) <br/>Personal</span></li>
                        <li><a href="tel:496912345678">+49 69 1234 5678</a> <br/><span>Corporate</span></li>
                      </ul>
                    </div>
                    <div className="opening-hour">
                      <h3>Banking Hours</h3>
                      <ul className="list-item clearfix">
                        <li>8.00am to 5.00pm <br/> <span>Mon - Friday</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="support-box">
                    <div className="icon-box"><img src="/assets/images/icons/icon-35.png" alt=""/></div>
                    <h4><a href="mailto:info@kaizenng.com">info@kaizenng.com</a></h4>
                    <p>Send your queries.</p>
                    <div className="link-box"><Link to="/contact"><i className="flaticon-right-arrow"></i></Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_75">
                <div className="widget-title">
                  <h3>Our Bank</h3>
                </div>
                <div className="widget-content mb_25">
                  <ul className="links-list clearfix">
                    <li><Link to="/about">About Us<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/team">Leadership<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
                <div className="widget-title">
                  <h3>Support</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/contact">Branches<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/contact">Customer Care<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/faq">Faq’s<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/contact">Contact Us<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_90">
                <div className="widget-title">
                  <h3>Products</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/account">Accounts<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/">Fixed Deposits<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/loans-1">Loans<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/investments-details-6">Investments<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-top">
            <ul className="list-item">
              <li>
                <div className="icon-box"><img src="/assets/images/icons/icon-38.png" alt=""/></div>
                <h4><Link to="/">Branches & ATMs</Link></h4>
              </li>
              <li>
                <div className="icon-box"><img src="/assets/images/icons/icon-39.png" alt=""/></div>
                <h4><Link to="/">Complaint Registration</Link></h4>
              </li>
              <li>
                <div className="icon-box"><img src="/assets/images/icons/icon-40.png" alt=""/></div>
                <h4><button type="button">Download Forms</button></h4>
              </li>
            </ul>
          </div>
          <div className="bottom-inner">
            <div className="licenses">
              <img src="/assets/images/banner/cbn.png" alt="CBN" />
              <img src="/assets/images/banner/ndic.png" alt="NDIC" />
            </div>
            <div className="social-box">
              <span>Follow Us On</span>
              <ul className="social-links">
                <li><Link to="/"><i className="flaticon-facebook"></i></Link></li>
                <li><a href="https://www.instagram.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram-logo"></i></a></li>
                <li><a href="https://x.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/kaizen-microfinance-bank/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="footer-logo">
              <figure className="logo"><Link to="/"><img src="/assets/images/banner/logo-2.png" alt=""/></Link></figure>
            </div>
            <ul className="footer-nav clearfix">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/">Terms & Conditions</Link></li>
              <li><Link to="/">Disclaimer.</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
