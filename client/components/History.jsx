import React from 'react'


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

 
render () {
  return (
    <>
    <div className='navBar'>
        <button className='top10Button' onClick={this.toggleVisibility} >Latest 10 Insults!</button>
      </div>
    <ul style={{visibility: this.state.visible}}>  
      {/* {this.state.history && this.renderHistory()} */}
      {this.props.history.map((insult, id) => {
        return (
          <li key={id}>{insult}</li>
        )
      })}
    </ul>
    </>

  )

}
}

export default History