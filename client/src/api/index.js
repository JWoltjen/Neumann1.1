import axios from 'axios'


const url = 'http://localhost:5000/quotes'


export const fetchQuote = () => axios.get(url)
export const createPost = (newQuote) => axios.post(url, newQuote)