import React, {useState, createContext} from 'react'

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([
    ])

    const deleteQuote = id => {
        setQuotes(quotes.filter(quote => quote._id !== id))
    }

    const saveQuote = id => {
        const saveQuote = quotes.find(quote => id === quote._id)
        localStorage.setItem(`${saveQuote._id}`, JSON.stringify(saveQuote)
        )
    }

    return(
        <QuoteContext.Provider value={[quotes, setQuotes, saveQuote, deleteQuote]}>
           {props.children}
        </QuoteContext.Provider>
    )
}
