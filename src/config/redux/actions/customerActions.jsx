import { CustomerService } from '../../../services/customerService'
import SweatAlert from '../../sweatAlert';

export const CreateCustomerActions = (data) => async (dispatch) => {
    try {
        const response = await CustomerService.createCustomer(data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const getCustomerActions = () => async (dispatch) => {
    try {
        await CustomerService.getCustomer()
    } catch (error) {
        SweatAlert(String(error.response.message), 'warning')
    }
}

export const PutCustomerActions = (id, data) => async (dispatch) => {
    try {
        const response = await CustomerService.editCustomer(id, data);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteCustomerActions = (id) => async (dispatch) => {
    try {
        const response = await CustomerService.deleteCustomer(id);
        SweatAlert(String(response.data.message), 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}