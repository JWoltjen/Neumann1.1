import express from 'express'; 

import { getFact } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/random', getFact)


export default router; 