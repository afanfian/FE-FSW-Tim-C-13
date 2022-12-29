import API from "./api"

export const PassangerService = {
    createPassanger : async (data) => {
        const response = await API.post('/passanger', data);
        return response;
    },
}