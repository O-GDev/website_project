import React from 'react'
import { Link } from 'react-router-dom'

export default function CardsSection({ modClass = 'pt_120 pb_110' }) {
  return (
    <section className={'cards-section ' + modClass}>
      <div className="auto-container">
        <div className="inner-container">
          <div className="upper-content">
            <figure className="card-image p_absolute t_0 r_0"><img src="/assets/images/resource/card-1.png" alt="" /></figure>
            <div className="content-box">
              <div className="sec-title">
                <h2>More than just <br />a card-It’s freedom...</h2>
                <p>Welcomed and every pain avoidedduty or the obligations of business our power of choice.</p>
              </div>
              <ul className="list-style-one clearfix">
                <li><div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>Exclusive discounts <br />and offers</li>
                <li><div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>Advanced security <br />features</li>
                <li><div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>Generous Rewards <br />Program</li>
                <li><div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>Flexible Credit <br />Limits</li>
              </ul>
            </div>
          </div>
          <div className="lower-content">
            <div className="more-text">
              <h5><i className="flaticon-sparkle"></i>Unlock Exclusive Rewards, <Link to="/">Apply Now</Link> and Elevate your Everyday Spending.</h5>
            </div>
            <div className="btn-box">
              <Link to="/cards-3"><span>Enquire Now</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}