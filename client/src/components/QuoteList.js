import React from 'react'
import Quote from './Quote'
import { useSelector } from 'react-redux'
function QuoteList() {
    const quotes = useSelector((state) => state.quotes)
    return (
        <div className='flex flex-col container mx-auto '>
            <Quote />
            <Quote />
            <Quote />
        </div>
    )
}

export default QuoteList
