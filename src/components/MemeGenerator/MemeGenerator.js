import React, { Component } from 'react'

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
        console.log(response);
        this.setState({ allMemeImgs: response.data.memes })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>This is MemeGenerator</div>
    )
  }
}

export default MemeGenerator
