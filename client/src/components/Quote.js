import React, {useState} from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Quote = ({setCurrentList, currentList, id, text, name}) => {

    const clearQuote = () => {
        setCurrentList(currentList.filter((el) => el.id !== Quote.id))
    }
    
    return (
        <div className='container mx-auto space-y-6 my-2 bg-green-300 p-2 overflow-auto shadow border-2 border-indigo-200 rounded'>
            <h3 className='text-left font-black'>
                {name}
            </h3>
            <p className='mx-auto text-justify font-normal'>
                "{text}"
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
                    <button>
                        Save
                    </button>
                    <button onClick={clearQuote}>
                        Clear
                    </button>
                    <button>
                        Repeat
                    </button>
                </div>
            </span>
        </div>
    )
}

export default Quote
