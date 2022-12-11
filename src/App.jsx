// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/User/login.jsx'
import Home from './views/home.jsx'
import Navbar from './views/Layout/navbarbeforelogin.jsx'

function App () {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />}/>
          </Routes>
          {/* <Route render={() => <h1>404 page not found</h1>} /> */}
        </div>
      </Router>
    </>
  )
}

export default App
