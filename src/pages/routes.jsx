import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from './AboutUsPage.jsx'
import CurrentAccountPage from './CurrentAccountPage.jsx'
import FamilyAccountPage from './FamilyAccountPage.jsx'
import SeniorCitizenAccountPage from './SeniorCitizenAccountPage.jsx'
import DematAccountPage from './DematAccountPage.jsx'
import BusinessAccountPage from './BusinessAccountPage.jsx'
import SavingsAccountPage from './SavingsAccountPage.jsx'
import AccountsPage from './AccountsPage.jsx'
import BlogWideGridPage from './BlogWideGridPage.jsx'
import BlogListPage from './BlogListPage.jsx'
import BlogListStyledPage from './BlogListStyledPage.jsx'
import BlogPostDetailsPage from './BlogPostDetailsPage.jsx'
import BlogGridPage from './BlogGridPage.jsx'
import MillenniaCardPage from './MillenniaCardPage.jsx'
import MoneyBackCardPage from './MoneyBackCardPage.jsx'
import EasyEmiCardPage from './EasyEmiCardPage.jsx'
import DinersClubPrivilegePage from './DinersClubPrivilegePage.jsx'
import TitaniumCardPage from './TitaniumCardPage.jsx'
import PlatinumCardPage from './PlatinumCardPage.jsx'
import CareerDetailsPage from './CareerDetailsPage.jsx'
import CareersPage from './CareersPage.jsx'
import ContactPage from './ContactPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import FaqPage from './FaqPage.jsx'
import HomeExchangePage from './HomeExchangePage.jsx'
import HomeSpotlightPage from './HomeSpotlightPage.jsx'
import HomeInvestmentPage from './HomeInvestmentPage.jsx'
import HomePage from './HomePage.jsx'
import MultiCurrencyAccountPage from './MultiCurrencyAccountPage.jsx'
import MutualFundsPage from './MutualFundsPage.jsx'
import InsurancePage from './InsurancePage.jsx'
import TaxDeferredInvestmentPage from './TaxDeferredInvestmentPage.jsx'
import InvestmentAdvisoryPage from './InvestmentAdvisoryPage.jsx'
import TradeFxPage from './TradeFxPage.jsx'
import KaizenAssetLoanPage from './KaizenAssetLoanPage.jsx'
import KaizenEnterpriseLoanPage from './KaizenEnterpriseLoanPage.jsx'
import KaizenMicroLoanPage from './KaizenMicroLoanPage.jsx'
import KaizenPersonalLoanPage from './KaizenPersonalLoanPage.jsx'
import ApplyForLoanPage from './ApplyForLoanPage.jsx'
import PartnersPage from './PartnersPage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'
import LeadershipDetailsPage from './LeadershipDetailsPage.jsx'
import LeadershipPage from './LeadershipPage.jsx'
import TestimonialsPage from './TestimonialsPage.jsx'
import UtilityCardsPage from './UtilityCardsPage.jsx'
import VerveCardPage from './VerveCardPage.jsx'


export default function AppRoutes(){
  return (
    <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/account-details-2" element={<CurrentAccountPage />} />
        <Route path="/account-details-3" element={<FamilyAccountPage />} />
        <Route path="/account-details-4" element={<SeniorCitizenAccountPage />} />
        <Route path="/account-details-5" element={<DematAccountPage />} />
        <Route path="/account-details-6" element={<BusinessAccountPage />} />
        <Route path="/account-details" element={<SavingsAccountPage />} />
        <Route path="/account" element={<AccountsPage />} />
        <Route path="/blog-2" element={<BlogWideGridPage />} />
        <Route path="/blog-3" element={<BlogListPage />} />
        <Route path="/blog-4" element={<BlogListStyledPage />} />
        <Route path="/blog-details" element={<BlogPostDetailsPage />} />
        <Route path="/blog" element={<BlogGridPage />} />
        <Route path="/card-details-2" element={<MillenniaCardPage />} />
        <Route path="/card-details-3" element={<MoneyBackCardPage />} />
        <Route path="/card-details-4" element={<EasyEmiCardPage />} />
        <Route path="/card-details-5" element={<DinersClubPrivilegePage />} />
        <Route path="/card-details-6" element={<TitaniumCardPage />} />
        <Route path="/card-details-utility" element={<UtilityCardsPage />} />
        <Route path="/card-details-verve" element={<VerveCardPage />} />
        <Route path="/card-details" element={<PlatinumCardPage />} />
        <Route path="/career-details" element={<CareerDetailsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/error" element={<NotFoundPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/index-2" element={<HomeExchangePage />} />
        <Route path="/index-3" element={<HomeSpotlightPage />} />
        <Route path="/index-4" element={<HomeInvestmentPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/investments-details-2" element={<MultiCurrencyAccountPage />} />
        <Route path="/investments-details-3" element={<MutualFundsPage />} />
        <Route path="/investments-details-4" element={<InsurancePage />} />
        <Route path="/investments-details-5" element={<TaxDeferredInvestmentPage />} />
        <Route path="/investments-details-6" element={<InvestmentAdvisoryPage />} />
        <Route path="/investments-details" element={<TradeFxPage />} />
        <Route path="/kaizen-asset" element={<KaizenAssetLoanPage />} />
        <Route path="/kaizen-enterprise" element={<KaizenEnterpriseLoanPage />} />
        <Route path="/kaizen-micro" element={<KaizenMicroLoanPage />} />
        <Route path="/kaizen-personal" element={<KaizenPersonalLoanPage />} />
        <Route path="/loans-1" element={<ApplyForLoanPage />} />
        <Route path="/loans-2" element={<ApplyForLoanPage />} />
        <Route path="/loans-3" element={<ApplyForLoanPage />} />
        <Route path="/loans-4" element={<ApplyForLoanPage />} />
        <Route path="/loans-5" element={<ApplyForLoanPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/team-details" element={<LeadershipDetailsPage />} />
        <Route path="/team-details/:id" element={<LeadershipDetailsPage />} />
        <Route path="/team" element={<LeadershipPage />} />
        <Route path="/testimonial" element={<TestimonialsPage />} />
    </Routes>
  )
}
