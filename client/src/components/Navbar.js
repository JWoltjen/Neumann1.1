import React, {useState,} from 'react'
import Quote from './Quote'

export default function Navbar() {
  const [currentQuote, setCurrentQuote] = useState([])
  const [currentList, setCurrentList] = useState([])
  const [currentFact, setCurrentFact] = useState([])
  const [currentFallacy, setCurrentFallacy] = useState([])
  // const [currentPitch, setCurrentPitch] = useState(.3)
  // const [currentRate, setCurrentRate] = useState(1)
  // const [currentVolume, setCurrentVolume] = useState(1)

  const playQuote = async () => {
      const response = await fetch('http://localhost:5000/quotes/random')
      const data = await response.json()
      setCurrentQuote(data)
      setCurrentList([...currentList, currentQuote])
      botVoice(currentQuote.text)
  }

  const playFact = async () => {
     const response = await fetch('http://localhost:5000/fact/random')
      const data = await response.json()
      setCurrentFact(data)
      setCurrentList([...currentList, currentFact])
      botVoice(currentFact.text)
  }
    const playFallacy = async () => {
      const response = await fetch('http://localhost:5000/fallacy/random')
      const data = await response.json()
      setCurrentFallacy(data)
      setCurrentList([...currentList, currentFallacy])
      botVoice(currentFallacy.name)
      botVoice(currentFallacy.text)
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
    <div className="Navbar">
      <div className="sticky top-0 max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around flex-wrap">
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
            <a onClick={(playFallacy)}
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Logical Fallacies
            </a>
          </div>
        </div>
      </div>
      <ul>
        {currentList.map(quote => (
          <Quote key={quote.id} text={quote.text} name={quote.name}/> 
        ))}
      </ul>
    </div>

  )
}

