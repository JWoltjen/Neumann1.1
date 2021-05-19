import express from 'express'; 

import { getQuotes, createQuote, getRandom } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/', getQuotes) 
router.post('/new', createQuote)
router.get('quotes/philosophy/random', getRandom)
// router.get('/joke/random', getRandom)
router.get('quotes/moralPsych/random', getRandom)
router.get('fallacies/random', getRandom)
// router.get('/biases/random', getRandom)
router.get('quotes/facts/random', getRandom)
export default router; 
