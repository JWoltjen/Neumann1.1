import React from 'react'
import useFetch from 'react-fetch-hook'

function TestFetch() {

const { isLoading, error, data} = useFetch('http://localhost:5000/quotes/random')

  if (isLoading) return 'Loading...'; 
  if (error) return 'Error'; 
    return (
        <div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default TestFetch
