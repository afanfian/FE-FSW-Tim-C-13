const initialState = {
    id: null,
    airport_name:"",
    airport_location:""
}

const airport = (state = initialState, action) => {
    switch(action.type){
        case 'GETAIRPORT':
        return({
            airport_name: action.payload.data,
            airport_location: action.payload.data,
            isLoggedIn: true
        })
        default:
            return state
    }
}

export default airport