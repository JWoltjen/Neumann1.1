import axios from 'axios'


const url = 'http://localhost:5000/quotes'
const random = 'http://localhost:5000/quotes/random'

//HEY NEW ROUTES
const joke = 'http://localhost:5000/jokes/random'
const moralPsych = 'http://localhost:5000/moralPsych/random'
const fallacies = 'http://localhost:5000/fallacies/random'
const biases = 'http://localhost:5000/biases/random'
const facts = 'https://localhost:5000/facts/random'

export const getQuotes = () => axios.get(url)
export const getQuote = () => axios.get(random)
export const createQuote = (newQuote) => axios.post(url, newQuote)