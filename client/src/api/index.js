import axios from 'axios'

const url = 'http://localhost:5000/quotes'
const random = 'http://localhost:5000/quotes/random'
const moral = 'http://localhost:5000/moral'
const fallacy = 'http://localhost:5000/fallacy/random'
const bias = 'http://localhost:5000/bias/random'
const fact = 'https://localhost:5000/fact/random'

export const getQuotes = () => axios.get(url)
export const getQuote = () => axios.get(random)
export const getFact = () => axios.get(fact)
export const getFallacy = () => axios.get(fallacy)
export const getMoral = () => axios.get(moral)
export const getBias = () => axios.get(bias)



export const createQuote = (newQuote) => axios.post(url, newQuote)