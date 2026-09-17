import React from 'react'
import FeaturesSection from '../components/sections/FeaturesSection'
import OverviewSection from '../components/sections/OverviewSection'
import PerformanceSection from '../components/sections/PerformanceSection'
import DocumentsSection from '../components/sections/DocumentsSection'
import WorkingSection from '../components/sections/WorkingSection'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function BusinessAccountPage(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Business Account"} crumbs={["Services","Accounts"]} />
        


        
        <OverviewSection h2="Business Accounts" eligibility="Business Account Eligibility" />
        


        
        <FeaturesSection heading="Key Citizen Demat Features" />
        


        
        <DocumentsSection />
        


        
        <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />
        


        
        <PerformanceSection />
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
