import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import '../../styles/login.css'
import account from '../../assets/account.svg'

const login = () => {
  return (
        <Container>
            <Row className="justify-content-center m-auto">
                <div id="login">
                    <div id="sign-in">
                        <Col md={{ span: 8, offset: 5 }}><img src={account} className="m-md-2" /></Col>
                        <h3>MASUK</h3>
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

                                <p className="mt-4">Dont Have an Account ?  <a href="/sign-up">Sing up</a></p>
                            </div>
                            <div className="d-grid gap-8 justify-content-center">
                                <p className="mt-1"> Or Sign in with :</p>
                            </div>

                        </Form>
                    </div>
                </div>
            </Row>
        </Container>
  )
}
export default login
/* // <div id="login">
        //     <div id="sign-in">
        //         <
        //         <h3>SIGN IN TO (APPLICATION NAME)</h3>
        //         <Form>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Control type="email" placeholder="Enter email" />
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Control type="password" placeholder="Password" />
        //             </Form.Group>
        //             <Button variant="primary" type="submit">
        //                 Sign-in
        //             </Button>

        //             <p className="mt-3">Dont Have an Account ?  <a href="/sign-up">Sing up</a></p>

        //         </Form>
        //     </div>
        // </div> */
