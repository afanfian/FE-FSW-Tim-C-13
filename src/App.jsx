// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/User/login'
// import Navbar from './views/Layout/navbarbeforelogin'
import Home from './views/home'
import Notification from './views/User/notif'
// import Testing from './views/testing'

function App () {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/notification' element={<Notification />} />
            {/* <Route path='/testing' element={<Testing />}/> */}
          </Routes>
          {/* <Route render={() => <h1>404 page not found</h1>} /> */}
        </div>
      </Router>
    </>
  )
}

export default App
