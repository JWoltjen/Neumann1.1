import axios from 'axios'


const url = 'http://localhost:5000/quotes'
const random = 'http://localhost:5000/quotes/random'

export const getQuotes = () => axios.get(url)
export const getQuote = () => axios.get(random)
export const createQuote = (newQuote) => axios.post(url, newQuote)