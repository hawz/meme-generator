import React, { Component } from 'react'

import classes from './MemeGenerator.module.css'

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: null
  }

  componentDidMount() {
    this.getMemes()
  }

  getMemes() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        this.setState({ allMemeImgs: memes })
      })
      .catch(console.error)
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form className={classes.MemeForm}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleInputChange} />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleInputChange} />

          <button>Gen</button>
        </form>
        <div className={classes.Meme}>
          <img src={this.state.randomImg} />
          <h2 className={classes.Top}>{this.state.topText}</h2>
          <h2 className={classes.Bottom}>{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
