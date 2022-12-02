// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/User/login.js'

function App () {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
          {/* <Route render={() => <h1>404 page not found</h1>} /> */}
        </div>
      </Router>
    </>
  )
}

export default App
