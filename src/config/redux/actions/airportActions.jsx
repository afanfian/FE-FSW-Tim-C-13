import { AirportService } from '../../../services/airportService'
import SweatAlert from '../../sweatAlert'

export const getAiportActions = () => async (dispatch) => {
    try {
        await AirportService.getAirport()
    } catch (error) {
        SweatAlert(String(error.response.message), 'warning')
    }
}

export const CreateAirportActions = (data) => async (dispatch) => {
    try {
        const response = await AirportService.createAirport(data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PutAirportActions = (id, data) => async (dispatch) => {
    try {
        const response = await AirportService.editAirport(id, data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteAirportActions = (id) => async (dispatch) => {
    try {
        const response = await AirportService.deleteAirport(id);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}