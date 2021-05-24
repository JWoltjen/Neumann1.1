import React, {useState, useEffect, createContext} from 'react'

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([
    ])
    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])

    const deleteQuote = id => {
        setQuotes(quotes.filter(quote => quote._id !== id))
    }

    const saveQuote = () => {
        // localStorage.setItem(quotes.filter(quote => quote._id === id), JSON.stringify(saveQuote)
        // )
        console.log('this is working')
    }

    return(
        <QuoteContext.Provider value={[quotes, setQuotes, saveQuote, deleteQuote]}>
           {props.children}
        </QuoteContext.Provider>
    )
}
