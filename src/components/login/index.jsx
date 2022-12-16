import React, { useEffect } from 'react'
import { Button, Form, Col, Container, Row } from 'react-bootstrap'
import GoogleComponent from 'react-google-login'
import './login.css'
import { gapi } from 'gapi-script'
import { account, gambarIcon } from '../../assets/index.js'
import Navbar from '../navbar'

function masuk () {
  const responseGoogle = (response) => {
    // console.log(response);
    window.localStorage.setItem('accessToken', response.accessToken)
  }
  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId:
          '267971687256-iphrhvg80ireilb73gjjnvvcg0fdavu2.apps.googleusercontent.com',
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  }, [])
  return (
    <div id="masuk">
      <Container >
        <Navbar />
        <Row className="justify-content-center m-auto">
          <Col className="col-md-7 pt-5">
            <div id="login">
              <div id="sign-in">
                <div className="d-grid gap-8 justify-content-center">
                  <img src={account} />
                </div>
                <div className="d-grid gap-8 justify-content-center mt-2">
                  <h3>LOGIN</h3>
                </div>

                <Form>
                  <Form.Group
                    className="mt-5 mb-3 shadow-sm"
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="Username" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 shadow-sm"
                    controlId="formBasicPassword"
                  >
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="d-grid gap-8">
                    <Button variant="primary" type="submit">
                      Sign-in
                    </Button>
                  </div>
                  <div className="d-grid gap-8 justify-content-center">
                    <p className="mt-4">
                      Dont Have an Account ? <a href="/register">Sign up</a>
                    </p>
                  </div>
                  <div className="d-grid gap-8 justify-content-center">
                    <p className="mt-1"> Or Sign in with :</p>
                  </div>

                  <div className="d-grid gap-8 justify-content-center">
                    <GoogleComponent
                      clientId="267971687256-iphrhvg80ireilb73gjjnvvcg0fdavu2.apps.googleusercontent.com"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      className="m-md-3"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </Col>

          <Col className="col-md-5 pt-5">
            <div>
              <img id="gambarIcon" src={gambarIcon} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default masuk
