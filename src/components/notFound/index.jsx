import React from 'react'
import './notFoundPage.css'
import { Logo } from '../../assets/index.js'

function NotFoundPage () {
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
                  404 Not Found
                </h2>
                <div className="error-details">
                  Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                  <a href='/' >
                    <button className="btn-green">
                      Take Me Home
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

export default NotFoundPage
