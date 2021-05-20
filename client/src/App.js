import React, {useEffect} from 'react'; 
import Navbar from './components/Navbar'; 
import QuoteList from './components/QuoteList';
import { useDispatch } from 'react-redux'
import { getQuotes } from './actions/quotes'
import Philosophy from './components/Philosophy';


const App = () => {

    return (
        <div>
            <Navbar />
            <QuoteList/>
        </div>
    )
}

export default App; 