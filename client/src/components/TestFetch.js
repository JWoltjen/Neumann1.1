import React from 'react'
import useFetch from 'react-fetch-hook'

function TestFetch() {

    //plan for when i wake up
    //make navbar contain individual components that are identical to this
    

    //make a function here that says on click, load this text, and then play
    //the bot voice

    //each text has its own buttons

const { isLoading, error, data} = useFetch('http://localhost:5000/quotes/')

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
