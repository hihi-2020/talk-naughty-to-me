
import React from 'react'
import ImageMaker from './ImageMaker'

import History from './History'

import { getInsult } from '../api'


class App extends React.Component {

  state = {
    insult: null,
    name: null,
    historyShowing: null,
  }

 renderHistory = () => {
  return (
    <>
    {this.state.historyShowing}
    </>
  )
}
  generateInsult = () => {

    
    getInsult()
    .then(data => {
      this.setState({
        insult: data
      })
    })
  }

  renderInsult = () => {
    return (
      <>
      <h3>{this.state.insult}</h3>
      </>
    )
  }}

  render() {
  return (

    <div className='container'>
      <div className='navBar'>
        <button className='top10Button'>Top10!</button>
      </div>
      <h1 className="title">Generic Insult Title</h1>
      <div className='name'>
        <label htmlFor="name">
          <input type="text" name='name' placeholder='Type your name here'/>
        </label>
      </div>
      <div className='getInsult'>
        <button className='insultButton' onClick={this.generateInsult} >Generate Insult</button>
        {this.state.insult && this.renderInsult()}
      </div>
      <History />
      <ImageMaker />
    </div>

  
    )
  }
}

export default App
