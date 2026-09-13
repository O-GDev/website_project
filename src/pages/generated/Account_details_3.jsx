import React from 'react'
import FeaturesSection from '../../components/sections/FeaturesSection'
import OverviewSection from '../../components/sections/OverviewSection'
import PerformanceSection from '../../components/sections/PerformanceSection'
import DocumentsSection from '../../components/sections/DocumentsSection'
import WorkingSection from '../../components/sections/WorkingSection'
import PageTitle from '../../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function Account_details_3(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Family 360º"} crumbs={["Services","Accounts"]} />
        


        
        <OverviewSection h2="Family Accounts" eligibility="Savings Family Eligibility" />
        


        
        <FeaturesSection heading="Key Family Account Features" />
        


        
        <DocumentsSection />
        


        
        <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />
        


        
        <PerformanceSection />
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
