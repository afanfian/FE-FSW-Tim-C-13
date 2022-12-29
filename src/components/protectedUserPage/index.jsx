import React from 'react'
import './protectedUserPage.css'
import { Logo } from '../../assets/index.js'

function ProtectedUser () {
    return (
        <div id="not-found">
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                <img src={Logo} alt="logo" width={200}/>
                <h1>
                    Oops!
                </h1>
                <h2>
                    Unable to access user
                </h2>
                <div className="error-details">
                    Sorry, an error has occured, Unable to access user!
                </div>
                <div className="error-actions">
                    <a href='/login' >
                    <button className="btn-green">
                        You must be logged in!
                    </button>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ProtectedUser
