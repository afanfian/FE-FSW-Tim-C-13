import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './views/User/login'
import Register from './views/User/register'
import Home from './views/home'
import About from './views/about'
import Notification from './views/User/notif'
import PageNotFound from './views/notFoundPage'

function App () {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/notification' element={<Notification />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
