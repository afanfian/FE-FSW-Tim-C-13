import { AuthService } from '../../../services/authService'
import SweatAlert from '../../sweatAlert'

// Login with email & password
export const loginActions = (data, history) => async (dispatch) => {
    try {
      const response = await AuthService.login(data);
      dispatch({type: 'LOGIN', payload: response.data});
      SweatAlert(response.data.message, 'success');
      history('/user/notification');
  } catch (error) {
      SweatAlert(String(error.response.data.message), 'warning')
  }   
}

// Verify Account
export const verifyAccountActions = (data, history) => async (dispatch) => {
  try {
    await AuthService.verifyAccount(data)
    SweatAlert('Verified Account', 'success')
    history('/user/profile')
  } catch (error) {
    SweatAlert(String(error.response.message), 'warning')
  }
}
// Register
export const registerActions = (data, history) => async (dispatch) => {
  try {
    const response = await AuthService.register(data);
    SweatAlert(response.data.message, 'success');
    history('/login');
  } catch (error) {
    SweatAlert(String(error.response.data.message), 'warning')
  }
}
// Logout
export const logoutActions = (history) => async (dispatch) => {
  try {
    const response = await AuthService.logout()
    dispatch({ type: 'LOGOUT', payload: response })
    SweatAlert('Berhasil Logout', 'success')
    history('/login')
  } catch (error) {
    SweatAlert(String(error.response.message), 'warning')
  }
}
//GetProfile
export const getProfileActions = () => async (dispatch) => {
  try {
    const response = await AuthService.getProfile()
    dispatch({ type: 'GETPROFILE', payload: response  })
  } catch (error) {
    SweatAlert(String(error.response.message), 'warning')
  }
}

//EditProfile
export const editProfileActions = (data, history) => async (dispatch) => {
  try {
    const response = await AuthService.editProfile(data)
    console.log(response)
    dispatch({ type: 'EDITPROFILE', payload: response  })
    SweatAlert(response.data.message, 'success')
    history('/user/pofile')
  } catch (error) {
    SweatAlert(String(error.response.message), 'warning')
  }
}