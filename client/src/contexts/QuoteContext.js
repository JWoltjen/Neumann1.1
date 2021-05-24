import React, {useState, useEffect, createContext} from 'react'

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('quotes')) || []; 
    // const [savedQuotes, setSavedQuotes] = useState(initialState)
    const [quotes, setQuotes] = useState(initialState)
    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])

    const deleteQuote = id => {
        setQuotes(quotes.filter(quote => quote._id !== id))
    }

    const saveQuote = id => {
        console.log(id)
        // const quoteToSave = localStorage.setItem(quotes.filter(quote => quote._id === id), JSON.stringify(quoteToSave)
        // )
    }

    return(
        <QuoteContext.Provider value={[quotes, setQuotes, saveQuote, deleteQuote]}>
           {props.children}
        </QuoteContext.Provider>
    )
}
