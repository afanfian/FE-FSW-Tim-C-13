import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './wishlist.css'

function wishlist(){
    return(
        <>
        <div id="wishlist">
            <Navbar />
            <Container>
                <Row>
                    <h3 className="fw-bold text-center">Check your Wishlist!</h3>
                    <Col className="col-md-12 pt-5 px-md-5">
                        <div className="about border border-2 shadow p-3 mb-5 bg-body rounded">
                        <div className="d-flex flex-column flex-lg-row justify-content-evenly pt-3">
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Airplane</h4>
                                <h5 className="text-black text-center">C-13 Aeroplane</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Departure</h4>
                                <h5 className="text-black text-center">Soekarno-Hatta (CGK)</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Arrival</h4>
                                <h5 className="text-black text-center">Ngurah Rai (DPS)</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Duration</h4>
                                <h5 className="text-black text-center">2.5 Hours</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Date</h4>
                                <h5 className="text-black text-center">26 December 2022</h5>
                            </div>
                            <div className="d-flex flex-column">
                                <h4 className="text-green text-center">Price</h4>
                                <h5 className="text-black text-center">650.000</h5>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}

export default wishlist