import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouteAdmin from '../../protectedAdmin'
import { Login, Register, Notification, About, Home, NotFoundPage, Schedule, Booking, CustomerList, PaymentList, Profile, Checkout, Wishlist, AirportList, TicketList, UserList, TicketPromo} from '../../views'
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
        <Route path="user/ticket-promo" element={<TicketPromo />} />
        <Route path="user/booking" element={<Booking />} />
        <Route path="user/checkout" element={<Checkout />} />
        <Route path="user/wishlist" element={<Wishlist/>} />
        <Route path="user/notification" element={<Notification />} />
        <Route path="user/profile" element={<Profile />} />
        {/* Admin */}
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin/customer-list" element={<CustomerList />} />
          <Route path="/admin/schedule-list" element={<Schedule />} />
          <Route path="/admin/payment-list" element={<PaymentList />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/airport-list" element={<AirportList />} />
          <Route path="/admin/ticket-list" element={<TicketList />} />
        </Route>
        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
