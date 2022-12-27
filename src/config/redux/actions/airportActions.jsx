import { AirportService } from '../../../services/airportService'
import SweatAlert from '../../sweatAlert'

export const getAiportActions = () => async (dispatch) => {
    try {
        await AirportService.getAirport()
        // dispatch({ type: 'GETAIRPORT', payload: response  })
    } catch (error) {
        SweatAlert(String(error.response.message), 'warning')
    }
}

export const PutAirportActions = (id, data) => async (dispatch) => {
    try {
        const response = await AirportService.editAirport(id, data);
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        SweatAlert('Update Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}