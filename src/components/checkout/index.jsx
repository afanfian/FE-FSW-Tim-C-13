import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import { Footer } from "../../components"
import Navbar from '../navbar/navbarafterlogin'
import './checkout.css'

function checkout (){
    return(
        <>
            <div id="checkout">
                <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <div>
                                Testing
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

export default checkout