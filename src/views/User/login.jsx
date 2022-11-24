import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../../styles/login.css'
// import logo from ''

const login = () => {
  return (
        <div id="login">
            <Container>
                <div id="sign-in">
                    {/* <img src={logo} alt="logo" /> */}
                    <h3>SIGN IN TO (APPLICATION NAME)</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign-in
                        </Button>

                        <p className="mt-3">Dont Have an Account ?  <a href="/sign-up">Sing up</a></p>

                    </Form>
                </div>
            </Container>
        </div>
  )
}
export default login
