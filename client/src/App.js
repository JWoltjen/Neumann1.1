import React from 'react'; 
import Navbar from './components/Navbar'; 

import {QuoteProvider} from './contexts/QuoteContext'

const App = () => {
    
    return (
        <QuoteProvider>
            <div className="App">
                <Navbar/>
             </div>
        </QuoteProvider>
    )
}

export default App; 