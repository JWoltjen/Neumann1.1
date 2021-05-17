import mongoose from 'mongoose'; 

const postSchema = mongoose.Schema({
    author: String, 
    text: String, 
    type: String, 
    likeCount: {
        type: Number, 
        default: 0
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage