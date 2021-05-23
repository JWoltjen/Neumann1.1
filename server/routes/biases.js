import express from 'express'; 

import { getBias } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/random', getBias)


export default router; 