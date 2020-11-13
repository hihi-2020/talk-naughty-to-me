
import React from 'react'
import History from './History'
import { getInsult, imageApi,getHistory } from '../api'


function randomNumber(){
  return Math.floor(Math.random() * 100) + 1
}

class App extends React.Component {

  state = {
    insult: null,
    name: null,
    imgSrc: null,
    history: []
  }

  handleChange = (event) => {
    const name = event.target.value
    this.setState({
      name: name
    }) 
  }

 
  // history sets up with component did mount

  handleClick = () => {
    getInsult(this.state.name)
    .then(data => {
      this.setState({
        insult: data,
      })
    })
    .then(imageApi() 
      .then(data => {
        this.setState({
          imgSrc: data.data.memes[randomNumber()].url
        })
      }))
    
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
      
      <div>
        <History />
      </div>
      <h1 className="title">Talk Naughty To Me</h1>
      <div className='name'>
          <input type="text" name='name' placeholder='Type your name here' onChange={this.handleChange}/>
      </div>
      <div className='getInsult'>
        <button className='insultButton' onClick={this.handleClick} >Generate Insult</button>
      </div>
        {this.state.insult && this.renderInsult()}
      {/* <History /> */}
    </div>

  
    )
  }
}

export default App
