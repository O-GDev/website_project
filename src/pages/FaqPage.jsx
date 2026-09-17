import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function FaqPage(){
  return (
    <>


    <div className="boxed_wrapper faq-dark">


        


        
         


        


        


        
        <PageTitle title={"Faq’s"} crumbs={["About"]} />
        


        
        <section className="faq-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-46.png)'}}></div>
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
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
