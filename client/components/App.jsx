
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

    
  //   getInsult()
  //   .then(data => {
  //     this.setState({
  //       insult: data
  //     })
  //   })
  // }

  renderInsult = () => {
    return (
      <>
      <h3>{this.state.insult}</h3>
      </>
    )
  }}

  render() {
  return (
    <>
      <h1>Generic Insult Title</h1>
      <input className="name"></input>
      <button onClick={this.generateInsult} className="getInsult" >Generate Insult</button>
      {this.state.insult && this.renderInsult()}
      <History />
      <ImageMaker />
    </>
    )
  }
}

export default App
