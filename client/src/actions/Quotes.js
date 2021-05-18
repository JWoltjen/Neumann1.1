import * as api from '../api'

//action creators
// you are fetching all the quotes, not just one
export const getQuotes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuote()
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }

    
}

export const getRandom = () => async (dispatch) => {
    try {
        const { data } = await api.fetchQuote()
        dispatch({ type: 'FETCH_RANDOM', payload: data})
    } catch (error) {
        
    }

    
}

