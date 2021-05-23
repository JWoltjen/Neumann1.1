import express from 'express'; 

import { getMoral } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/random', getMoral)


export default router; 