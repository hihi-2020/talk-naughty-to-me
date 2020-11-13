import React from 'react'

import {getHistory} from '../api.js'

class History extends React.Component {
  state = {
    history: [],
    visible: "hidden"
  }

  toggleVisibility = () => {
    if(this.state.visible == "visible"){
      this.setState({
          visible: "hidden"
      })
    } else {
      this.setState({
        visible: "visible"
      })
    }
  }

  renderHistory = () => {
    getHistory()
    .then(history =>{
      this.setState({
        history: history
      })
      return (
        <>
        {this.state.history}
        </>
      )
    })
  }
  
    componentDidMount = () => {
      this.renderHistory()
    }
  
render () {
  return (
    <>
    <div className='navBar'>
        <button className='top10Button' onClick={this.toggleVisibility} >Latest 10 Insults!</button>
      </div>
      <div className="list">
    <ul style={{visibility: this.state.visible}}>  
      {this.state.history.map((insult, id) => {
        return (
          <li key={id}>{insult}</li>
        )
         })}
    </ul>
    </div>
    </>

  )

}
}

export default History