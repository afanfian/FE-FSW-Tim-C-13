import { PassengerService } from "../../../services/passangerService";
import SweatAlert from "../../sweatAlert";

export const CreatePassangerActions = (data) => async (dispatch) => {
    try {
        const response = await PassengerService.createBooking(data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeletePassengerActions = (id) => async (dispatch) => {
    try {
        const response = await PassengerService.deletePassenger(id);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
export const PutPassengerActions = (id, data) => async (dispatch) => {
    try {
        const response = await PassengerService.editPassenger(id, data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }
}