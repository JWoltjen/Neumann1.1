import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
const Quote = ({key, text, name}) => {

    return (
        <div className='container mx-auto space-y-6 my-2 bg-green-200 p-2 overflow-auto shadow border-2 border-indigo-200 rounded'>
            <h3 className='text-left'>
                {name}
            </h3>
            <p className='text-justify'>
                "{text}"
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
                    <button>
                        Save
                    </button>
                    <button>
                        <i className="fab fa-pagelines">
                        </i>
                    </button>
                    <button>
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
