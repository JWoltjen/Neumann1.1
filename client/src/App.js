import React, {useEffect} from 'react'; 
import Navbar from './components/Navbar'; 
import QuoteList from './components/QuoteList';
import { useDispatch } from 'react-redux'
import { getQuotes } from './actions/quotes'
import TestFetch from './components/TestFetch';


const App = () => {

const dispatch = useDispatch(); 

    return (
        <div>
            <Navbar />
            <QuoteList/>
            <TestFetch/>
        </div>
    )
}

export default App; 