import express from 'express'; 

import { getQuotes, createQuote, getRandom, getFact, getMoralPsych, getFallacy,  } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/', getQuotes) 
router.post('/new', createQuote)
router.get('quotes/philosophy/random', getRandom)
// router.get('/joke/random', getRandom)
router.get('quotes/moralPsych/random', getMoralPsych)
router.get('fallacies/random', getFallacy)
// router.get('/biases/random', getRandom)
router.get('quotes/facts/random', getFact)
export default router; 
