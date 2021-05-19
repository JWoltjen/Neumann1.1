import mongoose from 'mongoose'; 

const quoteSchema = new mongoose.Schema({ 
    name: String,
    text: String, 
})

const Quote = mongoose.model('Quote', quoteSchema)

export default Quote


