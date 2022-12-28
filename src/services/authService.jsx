import API from './api'

export const AuthService = {
  login: async (data) => {
    const response = await API.post('/auth/login', data)
    const Name = response.data.username
    const RoleId = response.data.role
    console.log(response)
    setHeadersAndStorage(response.data, Name, RoleId)
    return response
  },
  loginGoogle: async (data) => {
    const response = await API.post('/auth/google', data)
    console.log(response.data.data.roleId)
    const Name = response.data.data.firstName
    const RoleId = response.data.data.roleId
    setHeadersAndStorage(response.data, Name, RoleId)
    return response
  },
  logout: async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('isLogged')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
  },
  register : async (data) => {
    const response = await API.post('/auth/register', data);
    return response;
  },
  verifyAccount: async (data) =>{
    const response = await API.post('/auth/verify', data);
    return response;
  },
  getProfile: async(data) => {
    const response = await API.get('/auth/profile', data);
    return response;
  },
  getAllProfile: async(data) => {
    const response = await API.get('/auth/allusers', data);
    return response;
  },
  editProfile: async(data) => {
    const response = await API.put('/auth/profile', data);
    return response;
  }
}

const setHeadersAndStorage = ({ username, token }, Name, RoleId) => {
  API.defaults.headers.Authorization = `Bearer ${token}`
  localStorage.setItem('username', JSON.stringify(Name))
  localStorage.setItem('role', JSON.stringify(RoleId))
  localStorage.setItem('token', token)
  localStorage.setItem('isLogged', true)
}
