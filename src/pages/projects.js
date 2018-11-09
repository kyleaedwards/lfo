import React from 'react'
import Project from '../components/project'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    projects {
      id
      title
      label
      body
      updatedAt
      tags {
        label
      }
      links
    }
  }
`

const Projects = () => (
  <Query query={query}>
    {({ loading, data }) => {
      if (loading) {
        return (
          <div>
            <h2>Projects</h2>
            <div className="loading">
              Loading...
            </div>
          </div>
        )
      }
      const { projects } = data
      return (
        <div>
          <h2>Projects</h2>
          <p className="expos">A collection of current and past projects.</p>
          <div className="posts">
            { projects.map(project => (<Project key={project.label} project={project} />)) }
          </div>
        </div>
      )
    }}
  </Query>
)

export default Projects
