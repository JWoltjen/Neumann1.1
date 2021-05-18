import axios from 'axios'


const url = 'http://localhost:5000/posts'


export const fetchQuote = () => axios.get(url)