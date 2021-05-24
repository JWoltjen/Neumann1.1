import React from 'react'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'
import {QuoteProvider} from './contexts/QuoteContext'

const App = () => {
    
    return (
        <QuoteProvider>
            <div className="App">
                <Navbar/>
                <Footer /> 
             </div>
        </QuoteProvider>
    )
}

export default App; 