import React from 'react'
import Carousel from '../ui/Carousel'

const ITEMS = [
  {
    rating: '4.9', title: 'Highly Trustworthy',
    quote: 'This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.',
    thumb: '/assets/images/resource/testimonial-5.png', name: 'Boris Elbert',
    desig: 'Personal Loan Holder',
    city: 'Newyork.'
  },
  {
    rating: '5', title: 'Fast Transactions',
    quote: 'Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.',
    thumb: '/assets/images/resource/testimonial-6.png', name: 'Dexter Clinton',
    desig: 'Savings Account Holder',
    city: 'California.'
  },
  {
    rating: '4.9', title: 'User Friendly',
    quote: 'Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like kaizenbank.',
    thumb: '/assets/images/resource/testimonial-7.png', name: 'Francis Emmet',
    desig: 'Business Account Holder',
    city: 'Newyork.'
  }
]

export default function TestimonialCarousel({ modClass = 'pt_90 pb_90', splitCity = false }) {
  return (
    <section className={'testimonial-style-two ' + modClass}>
      <div className="auto-container">
        <div className="inner-container p_relative">
          <span className="big-text">testimonials</span>
          <Carousel className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            {ITEMS.map((t, i) => (
              <div className="testimonial-block-one" key={i}>
                <div className="inner-box">
                  <div className="rating"><i className="flaticon-star"></i><span>Rated {t.rating}/5</span></div>
                  <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-121.png" alt="" /></div>
                  <h3>{t.title}</h3>
                  <p>{t.quote}</p>
                  <div className="author-box">
                    <figure className="thumb-box"><img loading="lazy" src={t.thumb} alt="" /></figure>
                    <h4>{t.name}</h4>
                    {splitCity
                      ? <><span className="designation">{t.desig},</span><span className="text">{t.city}</span></>
                      : <span className="designation">{t.desig}, {t.city}</span>}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}