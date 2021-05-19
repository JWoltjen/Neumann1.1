import express from 'express'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import dotenv from 'dotenv';
import quoteRoutes from './routes/quotes.js'
dotenv.config(); 

const app = express();
app.use(cors());  
app.use('/quotes', quoteRoutes)

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World')
})
//

const PORT = process.env.PORT || 5000; 

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))


mongoose.set('useFindAndModify', false);


