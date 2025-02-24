import React from 'react'
import { useSelector } from 'react-redux'

const ActionHistory = () => {
  const history = useSelector(store => store.games.history)

  return (
    <>
      <div className='nes-container is-dark with-title'>
        <p>Your actions:</p>
        {history.map((option) => (
          <div className='history-container'>
            <p className='action-text'>{option}</p>
          </div>
        ))}    
      </div> 
      <button 
        className='nes-btn is-warning'
        onClick={() => window.location.reload()}
      >
        Restart game
      </button>
    </>
  )
}

export default ActionHistory