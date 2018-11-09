import React from 'react'

const About = () => (
  <div>
    <h2>About Me</h2>
    <p>My name is Kyle Edwards. I am a senior full-stack software developer based out of Austin, TX, currently working for <a href="https://gospacecraft.com">SpaceCraft</a> building out APIs, backend task queue systems, reporting tools, and marketing integrations with third-party services like Yext, Birdeye, and Google Search Console. Former employers include Disney Interactive, Thrillist, Heleo, and Spiceworks.</p>
    <p>In my spare time, I make music and do production and editing for a fantastic podcast called <a href="https://www.holyswiftpodcast.com/">Holy Swift</a>.</p>
    <div className="columnSet">
      <div className="column">
        <p><strong>Fluent in:</strong></p>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>CSS/SCSS</li>
          <li>MySQL</li>
          <li>PHP</li>
        </ul>
      </div>
      <div className="column">
        <p><strong>Proficient in:</strong></p>
        <ul>
          <li>React/Redux</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CouchDB</li>
          <li>Redis</li>
          <li>Memcached</li>
          <li>Google Cloud</li>
          <li>AWS</li>
        </ul>
      </div>
      <div className="column">
        <p><strong>Currently studying:</strong></p>
        <ul>
          <li>GraphQL</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  </div>
)

export default About
