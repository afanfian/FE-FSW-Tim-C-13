import React from "react"
import {Container, Row, Card} from 'react-bootstrap'
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './checkout.css'

function checkout (){
    return(
        <>
            <div id="checkout">
                <Navbar />
                <Container>
                    <Row className="justify-content-center m-auto py-5">
                        <Card className="col-md-6">
                            <Card.Body>
                                <p className="fw-bold text-center">[Checkout]</p>
                                <p className="fw-bold">Name:</p>
                                <p className="">Fian Awamiry Maulana</p>
                                <p className="fw-bold">Departure:</p>
                                <p className="">Bandar Udara Internasional Soekarno-Hatta (CGK)</p>
                                <p className="fw-bold">Arrival:</p>
                                <p className="">Bandar Udara Internasional Ngurah Rai (DPS)</p>
                                <p className="fw-bold">Price:</p>
                                <p className="">896.000</p>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default checkout