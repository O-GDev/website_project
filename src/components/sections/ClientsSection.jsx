import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../ui/Carousel'

const LOGOS = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

export default function ClientsSection({ modClass = 'centred', light = false }) {
  return (
    <section className={'clients-section ' + modClass}>
      <div className="inner-container">
        <div className="sec-title">
          <span className={light ? 'sub-title light' : 'sub-title'}>centred</span>
          <h2>Trusted Corporate Partners</h2>
        </div>
        <Carousel className="six-item-carousel owl-carousel owl-theme dots-style-one owl-nav-none">
          {LOGOS.map((n, i) => (
            <figure className="clients-logo" key={i}>
              <Link to="/index-2"><img src={'/assets/images/clients/clients-' + n + '.png'} alt="" /></Link>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  )
}