import Quote from '../models/Quote.js'
import Fact from '../models/Fact.js'
import Fallacy from '../models/Fallacy.js'
import MoralPsych from '../models/MoralPsych.js'

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
        const q = await Quote.findOne().skip(random); 
        res.json(q)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getFact = async (req, res) => {
    try {
        const count = await Fact.countDocuments()
        const random = Math.floor(Math.random() * count)
        const f = await Fact.findOne().skip(random); 
        res.json(f)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getFact = async (req, res) => {
    try {
        const count = await Fallacy.countDocuments()
        const random = Math.floor(Math.random() * count)
        const f = await Fallacy.findOne().skip(random); 
        res.json(f)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getMoralPsych = async (req, res) => {
    try {
        const count = await MoralPsych.countDocuments()
        const random = Math.floor(Math.random() * count)
        const f = await MoralPsych.findOne().skip(random); 
        res.json(f)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}