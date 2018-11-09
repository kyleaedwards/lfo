import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import anime from 'animejs';

export default class Navigation extends React.Component {
  componentDidMount() {
    anime({
      targets: '#morphing',
      d: [
        { value: 'M10,50.5h6l6,10l12,-20l12,20l12,-20l6,10h6' },
        { value: 'M10,50.5h6l9,10l6,-20l18,20l6,-20l9,10h6' },
        { value: 'M10,50.5h6l3,10l18,-20l6,20l18,-20l3,10h6' },
        { value: 'M10,50.5h6l6,10l12,-20l12,20l12,-20l6,10h6' },
      ],
      easing: 'linear',
      duration: 20000,
      loop: true
    });
  }
  render() {
    return (
      <header>
        <hgroup>
          <h1 id="title">
            <svg width="140" height="140" viewBox="0 0 80 100">
              <g fill="none" fillRule="evenodd">
                <path id="morphing" d="M10,50.5h6l6,10l12,-20l12,20l12,-20l6,10h6" strokeWidth="2" stroke="black" />
              </g>
            </svg>
            <Link to="/">Kyle Edwards</Link>
          </h1>
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
  }
}
