import { TicketService } from "../../../services/ticketService";
import SweatAlert from '../../sweatAlert';

export const CreateTicketActions = (data) => async (dispatch) => {
    try {
        const response = await TicketService.createTicket(data);
        SweatAlert('Create Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const getTicketActions = () => async (dispatch) => {
    try {
        await TicketService.getTicket()
    } catch (error) {
        SweatAlert(String(error.response.message), 'warning')
    }
}

export const PutTicketActions = (id, data) => async (dispatch) => {
    try {
        const response = await TicketService.editTicket(id, data);
        SweatAlert('Update Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteTicketActions = (id) => async (dispatch) => {
    try {
        const response = await TicketService.deleteTicket(id);
        SweatAlert('Update Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}