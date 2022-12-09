import React, { useEffect } from 'react'
import { Button, Form, Container, Row } from 'react-bootstrap'
import '../../styles/login.css'
import account from '../../assets/account.svg'
import GoogleComponent from 'react-google-login'
import { gapi } from 'gapi-script'
import Navbar from '../../component/navbar'

function login () {
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
        <Container>
            <Navbar />
            <Row className="justify-content-center m-auto">
                <div id="login">
                    <div id="sign-in">
                        <div className="d-grid gap-8 justify-content-center">
                            <img src={account} />
                        </div>
                        <div className="d-grid gap-8 justify-content-center mt-2">
                            <h3>MASUK</h3>
                        </div>

                        <Form >
                            <Form.Group className="mt-5 mb-3 shadow-sm" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>

                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-8">
                                <Button variant="primary" type="submit" >
                                    Sign-in
                                </Button>
                            </div>
                            <div className="d-grid gap-8 justify-content-center">

                                <p className="mt-4">Dont Have an Account ?  <a href="/sign-up">Sign up</a></p>
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
            </Row>
        </Container>
  )
}
export default login
