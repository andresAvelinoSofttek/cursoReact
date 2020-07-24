import Axios from 'axios'

import unsplash from '../Api/unsplash'

//Action creator

export const createQuote = (quote, author, note) => {
    //Action
    return {
        type: 'CREATE_QUOTE',
        payload: {
            quote: quote,
            author: author,
            note: note
        }
    }
}


export const deleteQuote = (quote) => {
    return {
        type: 'DELETE_QUOTE',
        payload: quote
    }
}


export const getDailyQuote = () => {
    return async (dispatch, getState) => {
        try{
            const response = await unsplash.get('/search/photos', {
                params:{
                    query: 'paisaje',
                    orientation: 'portrait',
                    per_page: 20
                }
            })
            dispatch({
                type: 'NEW_QUOTE',
                payload: response.data.results
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }
    }
}


   export const createPolicy = (name, amount) => {
    //Action
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: name
    }
}

export const createClaim = (name, amount) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const getUsers = () => {
    return async (dispatch, getState) => {
        try{
            const respose = await Axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: 'NEW_USER_LIST',
                payload: respose.data
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }
    }
}

