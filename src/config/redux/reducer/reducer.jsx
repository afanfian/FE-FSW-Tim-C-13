import { combineReducers } from 'redux'
import auth from './auth/auth'
import aiport from './airport/airport'

const reducer = combineReducers({ auth, aiport })

export default reducer
