import express from 'express'; 

import { getQuotes, createQuote } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/', getQuotes) //this isn't working!
router.post('/new', createQuote)

export default router; 
