import { AirportService } from '../../../services/airportService'
import SweatAlert from '../../sweatAlert'

export const getAiportActions = () => async (dispatch) => {
    try {
        const response = await AirportService.getAirport()
        dispatch({ type: 'GETAIRPORT', payload: response  })
    } catch (error) {
        SweatAlert(String(error.response.message), 'warning')
    }
}