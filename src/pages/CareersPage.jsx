import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'
import jobOpenings from './careersData.js'

export default function CareersPage(){
  return (
    <>


    <div className="boxed_wrapper">


        


        


        


        


        
        <PageTitle title={"Careers"} crumbs={[{ label: "About", to: "/about" }]} />
        


        
        <section className="careers-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Join Our Team</span>
                    <h2>Current Openings</h2>
                </div>
                <p className="jobs-board-intro centred">Thanks for visiting our Career Page. Please review our open positions and apply to the positions that match your qualifications.</p>
                <div className="inner-container">
                    {jobOpenings.map((job) => (
                        <div className="careers-block-one" key={job.id}>
                            <div className="inner-box">
                                <div className="title-box mb_25">
                                    <div className="author-box">
                                        <div className="icon-box"><img src="/assets/images/icons/icon-207.png" alt="" /></div>
                                        <span className="text">Job Role</span>
                                        <h3>{job.title}</h3>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <ul className="info-list clearfix">
                                        <li>
                                            <div className="icon-box"><img src="/assets/images/icons/icon-210.png" alt="" /></div>
                                            <span>Location</span>
                                            <p>{job.location}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-box">
                                    <Link to="/career-details"><span>Apply Now</span></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        


        




        


    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
