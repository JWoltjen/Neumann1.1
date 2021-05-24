import React, {useContext} from 'react'
import {QuoteContext} from '../contexts/QuoteContext'
const Quote = (quote) => {

    const [quotes, setQuotes, saveQuote, deleteQuote] = useContext(QuoteContext)

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
            <h3 className='text-left text-3xl font-black'>
                {quote.name}
            </h3>
            <p className='mx-auto text-justify text-xl font-normal'>
                {quote.text}
             </p>
             <p>
                {quote.author}
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
                    <button
                        onClick={() => saveQuote(quote)}
                    >
                        <i className="far fa-save"></i>
                    </button>
                    <button
                        onClick={() => deleteQuote(quote.id)}
                    >
                    <i className="fas fa-trash-alt"></i>   
                    </button>
                    <button
                        onClick={() => botVoice(quote.text)}
                    >
                    <i className="fas fa-assistive-listening-systems"></i>
                    </button>
                </div>
            </span>
        </div>
    )
}

export default Quote
