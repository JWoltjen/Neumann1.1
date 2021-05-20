import React, {useState, useEffect} from 'react'
import Quote from './Quote'
import { useSelector } from 'react-redux'
import Philosophy from './Philosophy'



function QuoteList() {
    const [allQuotes, setAllQuotes] = useState([])
    const [currentQuote, setCurrentQuote] = useState([])
    const [filteredQuotes, setFilteredQuotes] = useState([])

    useEffect(() => {
        saveLocalQuotes();
    }, [allQuotes])

    const playQuote = () => {
        return (
            <li>
                <Philosophy/>
            </li>
        )
    }
    const saveLocalQuotes = () => {
        if (localStorage.getItems('quotes') === null){
            localStorage.getItem('quotes', JSON.stringify([])); 
        }   else {
            localStorage.setItem("quotes", JSON.stringify(quotes))
        }
    }
    return (
       <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <p onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            > Philosophy
            </p>
          </div>
    )
}

export default QuoteList
