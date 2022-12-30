import API from "./api"

export const PassengerService = {
    createPassenger : async (data) => {
        const response = await API.post('/passengers', data);
        return response;
    },
    getPassenger: async(data) => {
        const response = await API.get('/passengers', data);
        return response;
    },
    getPassengerId: async(id) => {
        const response = await API.get('/passengers/' +id);
        return response;
    },
    editPassenger : async (id, data) => {
        const response = await API.put('/passengers/'+id, data);
        return response;
    },
    deletePassenger : async (id) => {
        const response = await API.delete('/passengers/' +id);
        return response;
    },
}