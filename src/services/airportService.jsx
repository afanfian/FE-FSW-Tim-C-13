import API from './api'

export const AirportService = {
    getAirport: async(data) => {
        const response = await API.get('/airports', data);
        return response;
    },
    getAirportId: async(id) => {
        const response = await API.get('/airports/' +id);
        return response;
    },
    editAirport : async (id, data) => {
        const response = await API.put('/airports/'+id, data);
        return response;
    },
    deleteAirport : async (id) => {
        const response = await API.delete('/airports/'+id);
        return response;
    },
}