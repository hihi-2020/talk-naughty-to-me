
import React from 'react'
// import ImageMaker from './ImageMaker'

// import History from './History'

import { getInsult, imageApi } from '../api'


function randomNumber(){
  return Math.floor(Math.random() * 100) + 1
}

class App extends React.Component {

  state = {
    insult: null,
    name: null,
    // historyShowing: null,
    imgSrc: null
  }

  handleChange = (event) => {
    const name = event.target.value
    this.setState({
      name: name
    }) 
  }

  renderHistory = () => {
    return (
      <>
      {this.state.historyShowing}
      </>
    )
  }

  handleClick = () => {
    getInsult(this.state.name)
    .then(data => {
      this.setState({
        insult: data
      })
    })
    imageApi() 
      .then(data => {
        this.setState({
          imgSrc: data.data.memes[randomNumber()].url
        })
      })
  }

  renderInsult = () => {
    return (
      <>
      <h3>{this.state.insult}</h3>
      <img className="image"src={this.state.imgSrc}/>
      </>
    )
  }
  
  render() {
  return (

    <div className='container'>
      <div className='navBar'>
        <button className='top10Button'>Top10!</button>
      </div>
      <h1 className="title">Generic Insult Title</h1>
      <div className='name'>
        <label htmlFor="name">
          <input type="text" name='name' placeholder='Type your name here' onChange={this.handleChange}/>
        </label>
      </div>
      <div className='getInsult'>
        <button className='insultButton' onClick={this.handleClick} >Generate Insult</button>
        {this.state.insult && this.renderInsult()}
      </div>
      {/* <History /> */}
    </div>

  
    )
  }
}

export default App
