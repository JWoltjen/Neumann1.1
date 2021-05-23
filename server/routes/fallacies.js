import express from 'express'; 

import { getFallacy } from '../controllers/quotes.js'

const router = express.Router(); 

router.get('/random', getFallacy)


export default router; 