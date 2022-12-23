import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Notification, About, Home, NotFoundPage, MyAccount, Booking} from '../../views'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* User Before Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {/* User After Login */}
        <Route path="user/notification" element={<Notification />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
