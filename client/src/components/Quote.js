import React from 'react'

function Quote() {
    return (
        <div className='container mx-auto overflow-auto bg-green-200'>
            <p className='bg-green-200'>
                I am le awesome
            </p>
            <span>
                <button>
                    Save
                </button>
                <button>
                    Like
                </button>
                <button>
                    Author
                </button>
                <button>
                    Clear
                </button>
            </span>
        </div>
    )
}

export default Quote

//should have text
//author
//save
//like