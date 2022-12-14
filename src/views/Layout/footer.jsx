import React from 'react'
import { Container } from 'react-bootstrap'
import '../../styles/layout/footer.css'
import iconFacebook from '../../assets/Home/icon_facebook.svg'
import iconInstagram from '../../assets/Home/icon_instagram.svg'
import iconMail from '../../assets/Home/icon_mail.svg'
import logo from '../../assets/Home/logo-2.svg'

function footer () {
  return (
        <footer id="footer">
            <Container className="container d-flex flex-column flex-lg-row justify-content-lg-between">
                <div className="section-1 d-flex flex-column">
                    <p>Jalan c13 aeroplane gang 3 rt 5 rw 2</p>
                    <p>c13aeroplane@gmail.com</p>
                    <p>082-222-333-444</p>
                </div>
                <div className="section-2 d-flex flex-column gap-3">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <div className="section-3 d-flex flex-column">
                    <p>Connect with us</p>
                    <div className="social-media d-flex gap-2">
                        <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
                        <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
                        <a href="#"><img src={iconMail} alt="Email" /></a>
                    </div>
                </div>
                <div className="section-4">
                    <p>C-13 AEROPLANE</p>
                    <div>
                        <img src={logo} alt="logo" className='ps-3'/>
                    </div>
                </div>
            </Container>
        </footer>
  )
}
export default footer
