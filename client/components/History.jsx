import React from 'react'

import {getHistory} from '../api.js'

class History extends React.Component {
  state = {
    historyShowing: null
  }

  renderHistory = () => {
    return (
      <>
      {this.state.historyShowing}
      </>
    )
  }

render () {
  return (
    <>
    <h1>History Of The Greatest Insults In All The Land</h1>
    <ul>  
      {/* {this.state.historyShowing && this.renderHistory()}
      {this.state.historyShowing.map((insult) => {
        return (
          <li>{insult}</li>
        )
      })} */}
    </ul>
    </>

  )

}
}

export default History