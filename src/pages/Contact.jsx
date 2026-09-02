import React from 'react'

export default function Contact(){
  return (
    <main>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-form">
            <form method="post" action="/Flexibank/sendemail.php">
              <div className="row clearfix">
                <div className="form-group col-md-6"><input type="text" name="username" placeholder="Your Name" required/></div>
                <div className="form-group col-md-6"><input type="email" name="email" placeholder="Email" required/></div>
                <div className="form-group col-md-12"><input type="text" name="phone" placeholder="Phone"/></div>
                <div className="form-group col-md-12"><input type="text" name="subject" placeholder="Subject"/></div>
                <div className="form-group col-md-12"><textarea name="message" placeholder="Message"></textarea></div>
                <div className="form-group col-md-12"><button className="theme-btn" type="submit">Send Message</button></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
