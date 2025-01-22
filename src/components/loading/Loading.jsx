import React from 'react'
import "./loading.css"
import { SyncLoader } from 'react-spinners'
const Loading = () => {
  return (
    <div className='loading'>
        <p>Loading</p>
        <SyncLoader color="black" />
    </div>
  )
}

export default Loading