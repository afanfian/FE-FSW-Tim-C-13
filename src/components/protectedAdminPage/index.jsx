import React from 'react'
import './protectedAdminPage.css'
import { Logo } from '../../assets/index.js'

function ProtectedAdmin () {
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
                    Unable to access admin
                </h2>
                <div className="error-details">
                    Sorry, an error has occured, Unable to access admin!
                </div>
                <div className="error-actions">
                    <a href='/user/profile' >
                    <button className="btn-green">
                        Take Me User
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

export default ProtectedAdmin
