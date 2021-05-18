import Quote from '../models/Quote.js'

export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.send(quotes)
        res.status(200).json(quotes)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createQuote = async (req, res) => {
    const quote = req.body; 
    const newQuote = new Quote(quote)
    try {
        await newQuote.save()
        res.status(201).json(newQuote)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
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