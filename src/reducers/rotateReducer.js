import {GET_USERS} from '../types'

const initialState = {
    users:[],
    loading:true
}



export default (state = initialState, action) => {
    switch (action.type) {
        case "rotate":
            console.log('cmmcmcmc')
            return {
            rotating: action.payload
            };
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            } 
      default:
        return state;
    }
  };