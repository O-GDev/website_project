import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from '../ui/Tabs'

const CALC_DEFAULTS = {
  amount: { title: 'Loan Amount', value: '$500000', labels: ['$50,000', '$2.5 million'], percent: '20%' },
  term: { title: 'Loan Term (Years)', value: '20', labels: ['20 Years', '40 Years'], percent: '50%' },
  rate: { title: 'Interest Rate', value: '8.5%', labels: ['6%', '18%'], percent: '33.333%' },
}

const LOAN_TABS = [
  { id: 'tab-21', label: 'Kaizen Personal Loan' },
  { id: 'tab-22', label: 'Kaizen Enterprise Loan' },
  { id: 'tab-23', label: 'Kaizen Asset Loan' },
  { id: 'tab-24', label: 'Kaizen Micro Loan' },
]

const LEFT_CONTENT = (
  <div className="left-content mr_30">
    <div className="sec-title">
      <span className="sub-title">Loan Calculator</span>
      <h2>Flexible <br />Online Loan Calculator</h2>
      <p>Estimate your loan payments quickly & easily with our calculator.</p>
    </div>
    <div className="lower-text">
      <div className="icon-box"><img src="/assets/images/icons/icon-31.png" alt="" /></div>
      <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
    </div>
  </div>
)

const RIGHT_CONTENT = (
  <div className="right-content">
    {[CALC_DEFAULTS.amount, CALC_DEFAULTS.term, CALC_DEFAULTS.rate].map((row, i) => (
      <div className="progress-block-one" key={i}>
        <div className="title-box">
          <h5>{row.title}</h5>
          <h6>{row.value}</h6>
        </div>
        <div className="inner-box">
          <div className="text-box">
            <span>{row.labels[0]}</span>
            <span>{row.labels[1]}</span>
          </div>
          <div className="bar">
            <div className="bar-inner count-bar" data-percent={row.percent}></div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const AMOUNT_BOX = (
  <div className="amount-box">
    <div className="emi-box centred">
      <div className="icon-box"><img src="/assets/images/icons/icon-32.png" alt="" /></div>
      <h5>Monthly EMI</h5>
      <h3>$4,340.00</h3>
      <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
    </div>
    <div className="interest-amount">
      <div className="single-amount">
        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
        <h5>Interest Amount</h5>
        <span>$541,388</span>
      </div>
      <div className="single-amount">
        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
        <h5>Interest Amount</h5>
        <span>$541,388</span>
      </div>
    </div>
  </div>
)

export default function LoanCalculator() {
  return (
    <section className="calculator-section pt_120 pb_120">
      <figure className="image-layer">
        <img src="/assets/images/resource/men-2.png" alt="" />
        <span className="image-overlay"></span>
      </figure>
      <div className="auto-container">
        <div className="inner-container">
          <Tabs className="tabs-box">
            <div className="tab-btn-box">
              <div className="tab-btns tab-buttons clearfix">
                {LOAN_TABS.map((tab) => (
                  <div
                    className={`tab-btn ${tab.id === 'tab-21' ? 'active-btn' : ''}`}
                    key={tab.id}
                    data-tab={`#${tab.id}`}
                  >
                    <h4>{tab.label}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="tabs-content">
              {LOAN_TABS.map((tab) => (
                <div className={`tab ${tab.id === 'tab-21' ? 'active-tab' : ''}`} id={tab.id} key={tab.id}>
                  <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                            {LEFT_CONTENT}
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                            {RIGHT_CONTENT}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                      {AMOUNT_BOX}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
