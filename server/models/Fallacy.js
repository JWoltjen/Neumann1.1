import mongoose from 'mongoose'; 

const fallacySchema = new mongoose.Schema({ 
    name: String,
    text: String, 
})

const Fallacy = mongoose.model('Fallacy', fallacySchema)

export default Fallacy


