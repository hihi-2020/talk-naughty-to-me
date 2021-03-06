
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

  componentDidMount = () => {
    getHistory()
     .then(history =>{
       console.log(history)
       this.setState({
         history: history
       })
     })
   }

  handleChange = (event) => {
    const name = event.target.value
    this.setState({
      name: name
    }) 
  }
 
  handleClick = () => {
    getInsult(this.state.name)
    .then(data => {
      let newHistory = [data, ...this.state.history]
      newHistory.pop()
      this.setState({
        insult: data,
        history: newHistory
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
      
     
      <div className='history'>
        <History history={this.state.history} />
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
