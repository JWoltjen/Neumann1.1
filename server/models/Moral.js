import mongoose from 'mongoose'; 

const moralSchema = new mongoose.Schema({ 
    text: String,
    author: String
})

const Moral = mongoose.model('Moral', moralSchema)

export default Moral

