import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Notification, About, Home, NotFoundPage, MyAccount, Schedule, Booking, CustomerList, PaymentList, UserProfile, Profile} from '../../views'
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
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        {/* Admin */}
        <Route path="/admin/customer-list" element={<CustomerList />} />
        {/* <Route path="/admin/buy-ticket" element={<BuyTicket />} /> */}
        <Route path="/admin/schedule-list" element={<Schedule />} />
        <Route path="/admin/payment-list" element={<PaymentList />} />
        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
