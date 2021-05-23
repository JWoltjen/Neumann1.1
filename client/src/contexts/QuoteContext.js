import React, {useState, createContext} from 'react'

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([

    ])

    const deleteQuote = id => {
        setQuotes(quotes.filter(quote => quote._id !== id))
    }

    return(
        <QuoteContext.Provider value={[quotes, setQuotes, deleteQuote]}>
           {props.children}
        </QuoteContext.Provider>
    )
}
