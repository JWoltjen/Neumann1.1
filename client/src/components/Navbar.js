import React, { useContext } from 'react'
import QuoteList from './QuoteList'
import {QuoteContext} from '../contexts/QuoteContext'

export default function Navbar() {

  const [quotes, setQuotes] = useContext(QuoteContext)

  const playQuote = async () => {
      const response = await fetch('http://localhost:5000/quotes/random')
      const data = await response.json()
      setQuotes([...quotes, data])
      botVoice(data.text)
  }
  const playFact = async () => {
     const response = await fetch('http://localhost:5000/fact/random')
      const data = await response.json()
      setQuotes([...quotes, data])
      botVoice(data.text)
  }
    const playFallacy = async () => {
      const response = await fetch('http://localhost:5000/fallacy/random')
      const data = await response.json()
      setQuotes([...quotes, data])
      botVoice(data.name)
      botVoice(data.text)
  }

  const botVoice = (message) => {
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = message

    speech.volume =  1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech)
  }
 
  return (
    <div className='background'>
      <div className="Navbar sticky top-0 max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around flex-wrap">
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-lg font-bold text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Philosophy
            </a>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playFact)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-lg font-bold text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Fact
            </a>
          </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playFallacy)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-lg text-lg font-bold text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Cognitive Biases
            </a>
          </div>
        </div>
      </div>
      <div>
        <QuoteList/> 
      </div>
    </div>
  )
}

