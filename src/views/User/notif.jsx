import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Navbar from '../../views/layout/navbarbeforelogin'
import '../../styles/notif.css'

const notification = () => {
  return (
    <div id="notification">
      <Navbar />
      <Container>
        <Row className="justify-content-center m-auto">
          <h3 className="my-3"><b>NOTIFICATION</b></h3>
          <Card className="mb-3">
            <Card.Body>
              <b>[Flight Cancel]</b>
            </Card.Body>
            <Card.Body>
              Penerbangan anda tanggal <b>30 Desember 2022</b> menuju Jakarta
              <b> dibatalkan</b>.
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <b>[Flight Delay]</b>
            </Card.Body>
            <Card.Body>
              Penerbangan anda menuju Jakarta <b>ditunda 15 menit</b>.
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <b>[Flight Complete]</b>
            </Card.Body>
            <Card.Body>
              Penerbangan anda menuju Jakarta <b>telah selesai</b>.
            </Card.Body>
          </Card >
        </Row>
      </Container>
    </div>
  )
}

export default notification
