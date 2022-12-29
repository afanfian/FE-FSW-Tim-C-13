import API from './api'

export const CustomerService = {
    getCustomer: async(data) => {
        const response = await API.get('/customers', data);
        return response;
    },
    getCustomerId: async(id) => {
        const response = await API.get('/customers/' +id);
        return response;
    },
    editCustomer : async (id, data) => {
        const response = await API.put('/customers/'+id, data);
        return response;
    },
    deleteCustomer : async (id) => {
        const response = await API.delete('/customers/'+id);
        return response;
    },
    createCustomer : async (data) => {
        const response = await API.post('/customers/', data);
        return response;
    },
}