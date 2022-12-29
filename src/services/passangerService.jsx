import API from "./api"

export const PassangerService = {
    createPassanger : async (data) => {
        const response = await API.post('/passangers', data);
        return response;
    },
    getPasangger: async(data) => {
        const response = await API.get('/passangers', data);
        return response;
    },
    getPasanggerId: async(id) => {
        const response = await API.get('/passangers/' +id);
        return response;
    },
    editPasangger : async (id, data) => {
        const response = await API.put('/passangers/'+id, data);
        return response;
    },
    deletePasangger : async (id) => {
        const response = await API.delete('/passangers/' +id);
        return response;
    },
}