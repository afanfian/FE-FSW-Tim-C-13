import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Notification, About, Home, NotFoundPage } from '../../views'

const index = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/about" element={<About/>} />
          <Route path="/error404" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default index
