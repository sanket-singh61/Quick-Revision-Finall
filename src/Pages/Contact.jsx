import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have any questions? We'd love to hear from you.</p>

      <form className="contact-form">
        <label htmlFor="">Your Name :</label>
        <input type="text" placeholder=" Enter Your Name" required />
        <label htmlFor="">Your Email :</label>
        <input type="email" placeholder="Your Email" required />
        <label htmlFor="">Your Message :</label>
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
