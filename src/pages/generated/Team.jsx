import React from 'react'
import { Link } from 'react-router-dom'
import executives from './teamData.js'

export default function Team(){
  return (
    <>


    <div className="boxed_wrapper">


        


         
        


        


        


        
        <section className="leadership-banner">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Leadership</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li><span>Leadership</span></li>
                    </ul>
                </div>
            </div>
        </section>
        


        
        <section className="team-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Team Members</span>
                    <h2>Leadership & Executive Team</h2>
                </div>
                <div className="row clearfix">
                    {executives.map((exec) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block" key={exec.id}>
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src={`${exec.image}?v=5`} alt={exec.name} width={640} height={705} /></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link to={`/team-details/${exec.id}`}>{exec.name}</Link></h3>
                                        <span className="designation">{exec.designation}</span>
                                    </div>
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