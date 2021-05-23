import React, {useState, createContext} from 'react'

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const [quotes, setQuotes] = useState([

    ])

    return(
        <QuoteContext.Provider value={[quotes, setQuotes]}>
           {props.children}
        </QuoteContext.Provider>
    )
}
