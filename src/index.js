import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import 'cross-fetch/polyfill'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'sanitize.css/sanitize.css'
import './index.scss'

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjo1rges03kfc01dgxh2f5ogy/master'
})

library.add(faLinkedin)
library.add(faGithub)

const target = document.querySelector('#root')

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <div>
        <App />
      </div>
    </ApolloProvider>
  </BrowserRouter>,
  target
)