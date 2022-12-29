import API from './api'

export const TicketService = {
    getTicket: async(data) => {
        const response = await API.get('/tickets', data);
        return response;
    },
    getTicketId: async(id) => {
        const response = await API.get('/tickets/' +id);
        return response;
    },
    editTicket : async (id, data) => {
        const response = await API.put('/tickets/'+id, data);
        return response;
    },
    deleteTicket : async (id) => {
        const response = await API.delete('/tickets/'+id);
        return response;
    },
    createTicket : async (data) => {
        const response = await API.post('/tickets/', data);
        return response;
    },
    searchTicket : async (data) => {
        const response = await API.get('/tickets/search', {
            params: {...data}
        });
        return response;
    },
}