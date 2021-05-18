import mongoose from 'mongoose'; 

const quoteSchema = new mongoose.Schema({ 
    text: String,
    author: String, 
    type: String, 
})

const Quote = mongoose.model('Quote', quoteSchema)

export default Quote


