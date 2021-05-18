import mongoose from 'mongoose'; 
import random from 'mongoose-simple-random'

const postSchema = mongoose.Schema({
    author: String, 
    text: String, 
    type: String, 
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage


