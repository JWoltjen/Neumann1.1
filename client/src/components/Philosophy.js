import React from 'react'
import useFetch from 'react-fetch-hook'

const Philosophy = () => {

    return (
        <div className='container mx-auto space-y-6 my-2 bg-green-200 p-2 overflow-auto shadow border-2 border-indigo-200 rounded'>
            <p className='text-justify'>
                “It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.”
            </p>
            <span className='flex space-between center'>
                <div className='container mx-auto flex space-x-4 content-center'>
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
                    <button>
                        Repeat
                    </button>
                </div>
            </span>
        </div>
    )
}

// const { isLoading, error, data} = useFetch('http://localhost:5000/quotes/random')

//   if (isLoading) return 'Loading...'; 
//   if (error) return 'Error'; 
//     return (
//         <div>
//             <pre>
//                 {JSON.stringify(data.text, null, 2)}
//             </pre>
//         </div>
//     )
// }

export default Philosophy
