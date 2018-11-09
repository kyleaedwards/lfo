import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <header>
    <hgroup>
      <h1 id="title"><Link to="/"><span id="glyph">⎍</span>Kyle Edwards</Link></h1>
    </hgroup>
    <div className="nav">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><a href="/assets/Kyle_Edwards-Resume-20181106.pdf" download>Resume</a></li>
      </ul>
    </div>
    <div className="nav">
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/notes">Notes</Link></li>
      </ul>
    </div>
    <div className="nav-social nav">
      <a href="https://github.com/kyleaedwards">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/kyle-edwards-2ba5a941/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </header>
)
