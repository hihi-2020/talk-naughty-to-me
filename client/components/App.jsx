import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <div className='navBar'>
        <button className='top10Button'>Top10!</button>
      </div>
      <div className='name'>
        <label htmlFor="name">
        <input type="text" name='name' placeholder='Type your name here'/>
        </label>
      </div>
      <div className='getInsult'>
        <button className='insultButton'>
          Insult me!
        </button>
      </div>
     
    </div>
  )
}

export default App
