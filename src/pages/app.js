import React from 'react'
import { Route } from 'react-router-dom'
import About from './about'
import Navigation from './navigation'
import Footer from './footer'
import Projects from './projects'
import Notes from './notes'
import Tag from './tag'
import Project from './project'

const App = () => (
  <div>
    <Navigation />
    <main>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/projects/:label" component={Project} />
      <Route path="/tags/:label" component={Tag} />
      <Route exact path="/notes" component={Notes} />
    </main>
    <Footer />
  </div>
)

export default App