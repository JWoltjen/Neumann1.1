import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';
import QuoteList from './QuoteList'
import { getQuotes, getRandom, createQuote } from '../actions/quotes' 
import Philosophy from '../components/Philosophy'
import VoiceControl from '../components/VoiceControl'


export default function Navbar() {
  const [currentQuote, setCurrentQuote] = useState([])
  const [currentList, setCurrentList] = useState([])
  // const [currentPitch, setCurrentPitch] = useState(.3)
  // const [currentRate, setCurrentRate] = useState(1)
  // const [currentVolume, setCurrentVolume] = useState(1)

  const playQuote = async () => {
      const response = await fetch('http://localhost:5000/quotes/random')
      const data = await response.json()
      setCurrentQuote(data)
      setCurrentList([...currentList, currentQuote])
      console.log(currentQuote.text)
      botVoice(currentQuote.text)
  }

  const playFact = async () => {
     const response = await fetch('http://localhost:5000/fact/random')
      const data = await response.json()
      setCurrentQuote(data)
      setCurrentList([...currentList, currentQuote])
      console.log(currentQuote.text)
      botVoice(currentQuote.text)
  }

  const botVoice = (message) => {
    const speech = new SpeechSynthesisUtterance(); 
    speech.text = message

    speech.volume =  1; 
    speech.rate = 1; 
    speech.pitch = .3; 
    window.speechSynthesis.speak(speech)
  }

  useEffect(() => {

  },[currentList])
 
  return (
    <div className="Navbar">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Philosophy
            </a>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playFact)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Fact
            </a>
          </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Moral Psychology
            </a>
          </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Logical Fallacies
            </a>
          </div>
          {/* <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a onClick={(playQuote)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Cognitive Biases
            </a>
          </div> */}
        </div>
      </div>
      <ul>
        {currentList.map(quote => (
          <Philosophy key={quote.id} text={quote.text}/> 
        ))}
      </ul>
    </div>

  )
}

