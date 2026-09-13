import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable inner-page hero ("page title"): background image, shape layer,
 * page heading and breadcrumb trail. Rendered on every inner page.
 *
 * <PageTitle title="Accounts" crumbs={["Services"]} />
 * <PageTitle title="Current Account" crumbs={["Services", "Accounts"]} heading="h2">
 */
export default function PageTitle({ title, crumbs, heading = 'h1' }) {
  const path = crumbs || []
  const Tag = heading
  return (
    <section className="page-title">
      <div className="bg-layer" style={{ backgroundImage: 'url(/assets/images/background/page-title.jpg)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-32.png)' }}></div>
      <div className="auto-container">
        <div className="content-box">
          <Tag>{title}</Tag>
          <ul className="bread-crumb clearfix">
            <li><Link to="/">Home</Link></li>
            {path.map((c, i) => <li key={i}>{c}</li>)}
            <li><span>{title}</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}