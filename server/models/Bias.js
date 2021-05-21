import mongoose from 'mongoose'; 

const biasSchema = new mongoose.Schema({ 
    name: String,
    text: String, 
})

const Bias = mongoose.model('Bias', biasSchema)

export default Bias
