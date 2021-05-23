import React from 'react'; 
import Navbar from './components/Navbar'; 
import QuoteList from './components/QuoteList'
import {QuoteProvider} from './contexts/QuoteContext'

const App = () => {
    
    return (
        <QuoteProvider>
            <div className="App">
                <Navbar/>
                <QuoteList/>
             </div>
        </QuoteProvider>
    )
}

export default App; 