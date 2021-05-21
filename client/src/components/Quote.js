import React from 'react'

const Quote = ({key, text}) => {

    return (
        <div className='container mx-auto space-y-6 my-2 bg-green-200 p-2 overflow-auto shadow border-2 border-indigo-200 rounded'>
            <p className='text-justify'>
                {text}
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
                    <button>
                        Save
                    </button>
                    <button>
                        <i class="fab fa-pagelines">
                            Like
                        </i>
                    </button>
                    <button>
                        Author
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
