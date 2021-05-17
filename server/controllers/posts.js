import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
}
}

export const createPost = (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post); 
}

// export const randomPost = async (req, res) => {
//     try {
//         const randomQuote = await PostRandom.findOneRandom()
//         console.log(randomQuote)
//         res.status(200).json(randomQuote)
//     } catch (error) {
//         res.status(404).json({ message: error.message})
//     }
// }