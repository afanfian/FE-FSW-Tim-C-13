import { PassangerService } from "../../../services/passangerService";
import SweatAlert from "../../sweatAlert";

export const CreatePassangerActions = (data) => async (dispatch) => {
    try {
        const response = await PassangerService.createBooking(data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}