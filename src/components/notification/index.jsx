import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Navbar from '../navbar/navbarafterlogin'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyAccountActions } from '../../config/redux/actions/authActions';
import './notif.css'
import Footer from '../footer'

function notification() {
  const history = useNavigate();
  const data = { token: window.localStorage.getItem('token') }
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(verifyAccountActions(data, history));
  }

  return (
    <>
      <div id="notification">
        <Navbar />
        <Container>
          <Row className="justify-content-center m-auto">
            <h3 className="my-3"><b>NOTIFICATION</b></h3>
            <Card className="col-md-6 mb-3 text-center">
              <Card.Body>
                <p className="fw-bold h3">[Data Verification]</p>
              </Card.Body>
              <Card.Body>
                {/* <p>{window.localStorage.getItem('token')}</p> */}
                <p className="h4">Verify Your Account Below!</p>
                <button className="btn-green" onClick={onSubmit}>Klik</button>
              </Card.Body>
            </Card>

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

export default notification
