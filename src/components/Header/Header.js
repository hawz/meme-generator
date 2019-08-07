import React from 'react'

import classes from './Header.module.css'

const header = (props) => {
  return (
    <header className={classes.Header}>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"/>
      <p>Meme Generator</p>
    </header>
  )
}

export default header
