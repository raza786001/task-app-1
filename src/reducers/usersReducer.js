import {GET_USERS, GET_CATEGORIES} from '../types'

const initialState = {
    users:[],
    categories:[],
    loading:true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            } 
        case GET_CATEGORIES:
            console.log("Reducers ", action.payload)
            return {
                ...state,
                categories:action.payload,
                loading:false
            }     
      default:
        return state;
    }
  };