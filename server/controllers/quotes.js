import Quote from '../models/Quote.js'
import Fact from '../models/Fact.js'
import Fallacy from '../models/Fallacy.js'
import Moral from '../models/Moral.js'
import Bias from '../models/Bias.js'

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



export const getRandom = async (req, res) => {
    try {
        const count = await Quote.countDocuments()
        const random = Math.floor(Math.random() * count)
        const data = await Quote.findOne().skip(random); 
        res.status(200).json(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getBias = async (req, res) => {
    try {
        const count = await Bias.countDocuments()
        const random = Math.floor(Math.random() * count)
        const data = await Bias.findOne().skip(random); 
        res.status(200).json(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getFact = async (req, res) => { try { 
        const count = await Fact.countDocuments()
        const random = Math.floor(Math.random() * count)
        const data = await Fact.findOne().skip(random); 
        res.status(200).json(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getMoral = async (req, res) => {
    try {
        const count = await Moral.countDocuments()
        const random = Math.floor(Math.random() * count)
        const data = await Moral.findOne().skip(random);
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }        
}

export const getFallacy = async (req, res) => {
    try {
        const count = await Fallacy.countDocuments()
        const random = Math.floor(Math.random() * count)
        const data = await Fallacy.findOne().skip(random); 
        res.status(200).json(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
