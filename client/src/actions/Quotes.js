import * as api from '../api'

export const getQuotes = () => async (dispatch) => {
    try {
        const { data } = await api.getQuotes()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const getQuote = () => async (dispatch) => {
    try {
        const { data } = await api.getQuote()
        dispatch({ type: 'FETCH_RANDOM', payload: data})
    } catch (error) {
        console.log(error.message)
    }

    
}

export const createQuote = (quote) => async (dispatch) => {
    try {
        const { data } = await api.createQuote(quote)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

