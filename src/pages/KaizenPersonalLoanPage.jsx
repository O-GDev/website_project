import React from 'react'
import AppointmentSection from '../components/sections/AppointmentSection'
import CardsSection from '../components/sections/CardsSection'
import WorkingSection from '../components/sections/WorkingSection'
import LoanCalculator from '../components/sections/LoanCalculator'
import PageTitle from '../components/sections/PageTitle'

export default function KaizenPersonalLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Personal Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-personal" }]} />

        <CardsSection modClass="pt_120" />

        <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />

        <AppointmentSection />

        <LoanCalculator />

    </div>
    </>
  )
}
