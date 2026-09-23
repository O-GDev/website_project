import React from 'react'

export default function AppointmentSection() {
  return (
    <section className="appointment-section pt_120 pb_120">
            <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/appointment-bg.jpg)'}}></div>
            <span className="big-text">Appointment <br />Make an</span>
            <div className="auto-container">
                <div className="appointment-form">
                    <form action="loans-1.html" method="post">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-221.png" alt="" /></div>
                                    <label>Your Name</label>
                                    <input type="text" name="name" placeholder="Enter name here" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-222.png" alt="" /></div>
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Email address" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-223.png" alt="" /></div>
                                    <label>Phone</label>
                                    <input type="text" name="phone" placeholder="Phone number" required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-224.png" alt="" /></div>
                                    <label>Date</label>
                                    <input type="date" name="date" placeholder="Date" id="datepicker" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-225.png" alt="" /></div>
                                    <label>Time</label>
                                    <input type="time" name="time" placeholder="Time" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="form-group">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-226.png" alt="" /></div>
                                    <label>Address</label>
                                    <input type="text" name="name" placeholder="Your address" required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                <div className="message-btn pt_7">
                                    <button type="submit" className="theme-btn"><span>Send Your Request</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </section>
  )
}
