import React from 'react'
import SecureGrowth from '../components/sections/SecureGrowth'
import TestimonialCarousel from '../components/sections/TestimonialCarousel'
import ClientsSection from '../components/sections/ClientsSection'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

import Carousel from '../components/ui/Carousel'
export default function TaxDeferredInvestmentPage(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Tax-Deferred Investment"} crumbs={["Services","Investments"]} />
        


        
        <SecureGrowth />
        


        
        <ClientsSection modClass="sec-pad centred" />
        


        
        <TestimonialCarousel modClass="pt_90 pb_90" splitCity />
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
