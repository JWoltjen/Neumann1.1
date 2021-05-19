import axios from 'axios'


const url = 'http://localhost:5000/quotes'
const random = 'http://localhost:5000/quotes/random'

//HEY NEW ROUTES
const moralPsych = 'http://localhost:5000/moralPsych/random'
const fallacy = 'http://localhost:5000/fallacy/random'
const biases = 'http://localhost:5000/biases/random'
const fact = 'https://localhost:5000/fact/random'

export const getQuotes = () => axios.get(url)
export const getQuote = () => axios.get(random)
export const getFact = () => axios.get(fact)
export const getFallacy = () => axios.get(fallacy)

export const createQuote = (newQuote) => axios.post(url, newQuote)