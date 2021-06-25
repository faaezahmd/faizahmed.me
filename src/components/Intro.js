import React from 'react'
import { Link } from "gatsby"

const Intro = () => {
    return (
        <div class="intro">
          <h3 class="hi">Hi <span role="img">👋</span>, my name is</h3>
          <h1>Faiz Ahmed.</h1>
          <h2>Front-end Developer.</h2>
          <p>
            I focus on building digital experiences that are pleasure to use.
          </p>
          <p>
            I am currently working as {' '} 
            <span>Lead Front End Developer</span> 
            {' '}at {' '}
            <Link class="link" target="_blank" href="https://www.decojent.com/">Decojent</Link>
         </p>
          <Link class="btn" href="mailto:hi@faizahmed.me">Get In Touch</Link>
        </div>
    )
}

export default Intro;