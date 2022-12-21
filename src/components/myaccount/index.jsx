import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { Container } from 'react-bootstrap'

function myaccount() {
    return (
        <div id = "my-account">
            <Container>
                <Navbar />
                <p>Ini Halaman My Account</p>
                <Footer />    
            </Container>
        </div>
    )
}
export default myaccount