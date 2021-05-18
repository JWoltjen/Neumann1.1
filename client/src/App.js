import React, {useEffect} from 'react'; 
import Navbar from './components/Navbar'; 
import QuoteList from './components/QuoteList';
import { useDispatch } from 'react-redux'
import { getQuotes } from './actions/quotes'


const App = () => {

const dispatch = useDispatch(); 

useEffect(() => {
    //this use effect should be turned into a series of "on clicks"
    dispatch(getQuotes()); 
}, [dispatch])
    return (
        <div>
            <Navbar />
            <QuoteList/>
        </div>
    )
}

export default App; 