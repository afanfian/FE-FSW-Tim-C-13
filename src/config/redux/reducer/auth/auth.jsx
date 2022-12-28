const initialState = {
  // local storage
  // user: JSON.parse(localStorage.getItem('username')) || {},
  user: [],
  token: localStorage.getItem('token'),
  isLoggedIn: !!localStorage.getItem('username'),
  roleId: JSON.parse(localStorage.getItem('role')) || {}
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return ({
        ...state,
        user: action.payload.username,
        token: action.payload.token,
        isLoggedIn: true,
        roleId: action.payload.role
      })
    case 'REGISTER':
      return ({
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true
      })
    case 'LOGOUT':
      return ({
        ...state,
        user: {},
        token: null,
        isLoggedIn: false
      })
    case 'GETPROFILE':
      return ({
        ...state,
        user: action.payload.data,
        token: action.payload.token,
        isLoggedIn: true
      })
    case 'EDITPROFILE':
    return ({
      ...state,
      user: action.payload.data,
      token: action.payload.token,
      isLoggedIn: true
    })
    default:
      return state
  }
}

export default auth
