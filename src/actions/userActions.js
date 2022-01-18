import {GET_USERS, USERS_ERROR, GET_CATEGORIES} from '../types'
import axios from 'axios'


export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://swapi.dev/api/people/1/`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getCategories = (getUrl) => async dispatch => {
    console.log("Actions URL ", getUrl)
    try{
        const res = await axios.get(getUrl)
        dispatch( {
            type: GET_CATEGORIES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}