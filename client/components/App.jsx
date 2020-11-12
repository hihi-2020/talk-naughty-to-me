
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


  handleClick = () => {
    
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
  }
  

  render() {
  return (
    <>
      <h1>Generic Insult Title</h1>
      <input className="name"></input>
      <button onClick={this.handleClick} className="getInsult" >Generate Insult</button>
      {this.state.insult && this.renderInsult()}
      {this.state.historyShowing && this.renderHistory()}
      <History />
      <ImageMaker />
    </>
    )
  }
}

export default App
