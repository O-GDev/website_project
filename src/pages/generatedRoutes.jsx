import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './generated/About.jsx'
import Account_details_2 from './generated/Account_details_2.jsx'
import Account_details_3 from './generated/Account_details_3.jsx'
import Account_details_4 from './generated/Account_details_4.jsx'
import Account_details_5 from './generated/Account_details_5.jsx'
import Account_details_6 from './generated/Account_details_6.jsx'
import Account_details from './generated/Account_details.jsx'
import Account from './generated/Account.jsx'
import Blog_2 from './generated/Blog_2.jsx'
import Blog_3 from './generated/Blog_3.jsx'
import Blog_4 from './generated/Blog_4.jsx'
import Blog_details from './generated/Blog_details.jsx'
import Blog from './generated/Blog.jsx'
import Card_details_2 from './generated/Card_details_2.jsx'
import Card_details_3 from './generated/Card_details_3.jsx'
import Card_details_4 from './generated/Card_details_4.jsx'
import Card_details_5 from './generated/Card_details_5.jsx'
import Card_details_6 from './generated/Card_details_6.jsx'
import Card_details from './generated/Card_details.jsx'
import Cards_2 from './generated/Cards_2.jsx'
import Cards_3 from './generated/Cards_3.jsx'
import Cards from './generated/Cards.jsx'
import Career_details from './generated/Career_details.jsx'
import Careers from './generated/Careers.jsx'
import Contact from './generated/Contact.jsx'
import Error from './generated/Error.jsx'
import Faq from './generated/Faq.jsx'
import Index_2 from './generated/Index_2.jsx'
import Index_3 from './generated/Index_3.jsx'
import Index_4 from './generated/Index_4.jsx'
import Index from './generated/Index.jsx'
import Investments_details_2 from './generated/Investments_details_2.jsx'
import Investments_details_3 from './generated/Investments_details_3.jsx'
import Investments_details_4 from './generated/Investments_details_4.jsx'
import Investments_details_5 from './generated/Investments_details_5.jsx'
import Investments_details_6 from './generated/Investments_details_6.jsx'
import Investments_details from './generated/Investments_details.jsx'
import Loans_1 from './generated/Loans_1.jsx'
import Loans_2 from './generated/Loans_2.jsx'
import Loans_3 from './generated/Loans_3.jsx'
import Loans_4 from './generated/Loans_4.jsx'
import Loans_5 from './generated/Loans_5.jsx'
import Partners from './generated/Partners.jsx'
import Team_details from './generated/Team_details.jsx'
import Team from './generated/Team.jsx'
import Testimonial from './generated/Testimonial.jsx'


export default function GeneratedRoutes(){
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/account-details-2" element={<Account_details_2 />} />
        <Route path="/account-details-3" element={<Account_details_3 />} />
        <Route path="/account-details-4" element={<Account_details_4 />} />
        <Route path="/account-details-5" element={<Account_details_5 />} />
        <Route path="/account-details-6" element={<Account_details_6 />} />
        <Route path="/account-details" element={<Account_details />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog-2" element={<Blog_2 />} />
        <Route path="/blog-3" element={<Blog_3 />} />
        <Route path="/blog-4" element={<Blog_4 />} />
        <Route path="/blog-details" element={<Blog_details />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/card-details-2" element={<Card_details_2 />} />
        <Route path="/card-details-3" element={<Card_details_3 />} />
        <Route path="/card-details-4" element={<Card_details_4 />} />
        <Route path="/card-details-5" element={<Card_details_5 />} />
        <Route path="/card-details-6" element={<Card_details_6 />} />
        <Route path="/card-details" element={<Card_details />} />
        <Route path="/cards-2" element={<Cards_2 />} />
        <Route path="/cards-3" element={<Cards_3 />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/career-details" element={<Career_details />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/index-2" element={<Index_2 />} />
        <Route path="/index-3" element={<Index_3 />} />
        <Route path="/index-4" element={<Index_4 />} />
        <Route path="/" element={<Index />} />
        <Route path="/investments-details-2" element={<Investments_details_2 />} />
        <Route path="/investments-details-3" element={<Investments_details_3 />} />
        <Route path="/investments-details-4" element={<Investments_details_4 />} />
        <Route path="/investments-details-5" element={<Investments_details_5 />} />
        <Route path="/investments-details-6" element={<Investments_details_6 />} />
        <Route path="/investments-details" element={<Investments_details />} />
        <Route path="/loans-1" element={<Loans_1 />} />
        <Route path="/loans-2" element={<Loans_2 />} />
        <Route path="/loans-3" element={<Loans_3 />} />
        <Route path="/loans-4" element={<Loans_4 />} />
        <Route path="/loans-5" element={<Loans_5 />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/team-details" element={<Team_details />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  )
}
