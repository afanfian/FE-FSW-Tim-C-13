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
                    <Col className="col-md-6">
                        <h1>Testing</h1>
                    </Col>
                    <Col className="col-md-6">
                        <h1>Testing</h1>
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