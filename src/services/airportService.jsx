import API from './api'

export const AirportService = {
    getAirport: async(data) => {
        const response = await API.get('/airports', data);
        return response;
    },
}