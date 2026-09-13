import React from 'react'
import { Link } from 'react-router-dom'

export default function DocumentsSection() {
  return (
    <section className="documents-section">
            <div className="bg-color bg-color-1"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-37.png)'}}></div>
                    <div className="content-box">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Required Documents</span>
                                    <h2>Required Documents for Application</h2>
                                    <p>Please upload the necessary documents to complete.</p>
                                    <Link to="/account-details"><span>Upload Now</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 list-column">
                                <ul className="list-item clearfix">
                                    <li><i className="flaticon-sparkle"></i>PAN Card is Mandatory</li>
                                    <li><i className="flaticon-sparkle"></i>Completed Application Form</li>
                                    <li><i className="flaticon-sparkle"></i>Non Resident <span>[Passpost, Visa, Social Security Number]</span></li>
                                    <li><i className="flaticon-sparkle"></i>Resident <span>[Identification Documents, Social Security Card]</span></li>
                                    <li><i className="flaticon-sparkle"></i>Passport Size Photographs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
