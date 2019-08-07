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
            value={this.state.topText}
            onChange={this.handleInputChange} />

          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleInputChange} />

          <button>Gen</button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
