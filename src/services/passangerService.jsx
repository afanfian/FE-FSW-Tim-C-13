import API from "./api"

export const PassangerService = {
    createPassanger : async (data) => {
        const response = await API.post('/passengers', data);
        return response;
    },
    getPasangger: async(data) => {
        const response = await API.get('/passengers', data);
        return response;
    },
    getPasanggerId: async(id) => {
        const response = await API.get('/passengers/' +id);
        return response;
    },
    editPasangger : async (id, data) => {
        const response = await API.put('/passengers/'+id, data);
        return response;
    },
    deletePasangger : async (id) => {
        const response = await API.delete('/passengers/' +id);
        return response;
    },
}