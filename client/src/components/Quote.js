import React, {useContext} from 'react'
import {QuoteContext} from '../contexts/QuoteContext'
const Quote = (quote) => {

    const [quotes, setQuotes, deleteQuote] = useContext(QuoteContext)

    const botVoice = (message) => {
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = message

    speech.volume =  1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech)
  }
    return (
        <div className='container mx-auto space-y-6 my-2 bg-green-300 p-2 overflow-auto shadow border-2 border-indigo-200 rounded'>
            <h3 className='text-left font-black'>
                {quote._id}
                {quote.name}
            </h3>
            <p className='mx-auto text-justify font-normal'>
                {quote.text}
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
                    <button>
                        Save
                    </button>
                    <button
                        onClick={() => deleteQuote(quote.id)}
                    >
                    <i className='fas fa-trash-alt'></i>   
                    </button>
                    <button
                        onClick={() => botVoice(quote.text)}
                    >
                        Repeat
                    </button>
                </div>
            </span>
        </div>
    )
}

export default Quote
