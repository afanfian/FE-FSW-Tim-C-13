import React from 'react'
import '../styles/notFoundPage.css'

function NotFoundPage () {
  return (
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
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
                <a href="/" >
                  <button className="btn-green">
                    Take Me Home
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NotFoundPage
