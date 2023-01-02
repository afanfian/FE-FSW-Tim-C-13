import API from "./api"

export const BookingService = {
    createBooking : async (data) => {
        const response = await API.post('/bookings', data);
        return response;
    },
    getBooking : async (data) => {
        const response = await API.get('/bookings', data);
        return response;
    },
    getBookingUser : async (user, data) => {
        const response = await API.get('/bookings/user');
        return response;
    },
    getBookingId : async (id, data) => {
        const response = await API.get('/bookings/'+id, data);
        return response;
    },
}