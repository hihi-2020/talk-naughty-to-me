import React from 'react'
import {imageApi} from '../api'
function randomNumber(){
  return Math.floor(Math.random() * 100) + 1
}


class ImageMaker extends React.Component {
  state ={
   imgSrc: null
 }



  renderApi = () =>{  //Gets and creates the image from a  meme api
    imageApi() 
      .then(data => {
        this.setState({
          imgSrc: data.data.memes[randomNumber()].url
        })
      })
  }

render(){
  return (
    <>
    <h1>React development has begun!</h1>
    <button onClick={this.renderApi}>ClickMe</button>
    <br/>
    <img className="image"src={this.state.imgSrc} />
    </>
  )}
}

export default ImageMaker