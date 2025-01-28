import React, { useState } from "react"
import "./Footer.css"

function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Milan Store</h3>
          <p>Your one-stop shop for fashion and accessories. We bring you the latest trends from Milan, Italy.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
            <button type="submit" className="btn btn-light">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2023 Milan Store. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

