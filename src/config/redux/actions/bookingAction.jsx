import { BookingService } from "../../../services/bookingService";
import SweatAlert from "../../SweatAlert";

export const getBookingActions = (data) => async (dispatch) => {
    try {
        const response = await BookingService.getBookingSchedules(data);
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const BookingActions = (data,roundtrip) => async (dispatch) => {
    try {
        const response = await BookingService.Booking(data);
        if (roundtrip === true) {
            dispatch({type: 'BOOKING_ROUND', payload : response.data.data});
        }else{
            dispatch({type: 'BOOKING', payload : response.data.data.newBooking[0].id});
        }
        // dispatch({type: 'BOOKING', payload : response.data.data.newBooking.id});
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}