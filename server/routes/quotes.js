import express from 'express'; 

import { getQuotes, createQuote, getRandom } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/', getQuotes)
router.post('/new', createQuote)
router.get('/random', getRandom)

export default router; 
