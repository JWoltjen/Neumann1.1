import React, {useContext} from 'react'
import Quote from './Quote'
import {QuoteContext} from '../contexts/QuoteContext'

const QuoteList = () => {
    const [quotes, setQuotes] = useContext(QuoteContext)

    return (
        <div className='quote-container'>
            <ul className='quote-list flex flex-col-reverse'>
                {quotes.map(quote => (
                    <Quote text={quote.text} name={quote.name} key={quote._id} id={quote._id}/>
                ))}
            </ul>
        </div>
    )
}

export default QuoteList
