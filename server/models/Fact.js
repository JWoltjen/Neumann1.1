import mongoose from 'mongoose'; 

const factSchema = new mongoose.Schema({ 
    text: String,
})

const Fact = mongoose.model('Fact', factSchema)

export default Fact


