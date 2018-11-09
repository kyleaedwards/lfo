import React from 'react'
import Note from '../components/note'
import humanizeDays from '../utils/humanize-days'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    notes(last: 5) {
      id
      body
      createdAt
      tags {
        label
      }
      project {
        title
        label
      }
      images {
        handle
        fileName
      }
    }
    projects {
      id
    }
    tags {
      id
    }
    metas(where: {
      label: "siteCreated"
    }) {
      value
    }
  }
`

export default () => (
  <Query query={query}>
    {({ loading, data }) => {
      console.log(data);
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
      const { notes, tags, projects, metas } = data
      const numProjects = projects ? projects.length : 0
      const numTags = tags ? tags.length : 0
      const startDate = metas && metas[0] ? metas[0].value : Date.now()
      const times = humanizeDays(startDate)
      return (
        <div>
          <h2>Notes</h2>
          <p className="expos">A collection of notes from the past <strong>{times}</strong>, spanning <strong>{numProjects}</strong> projects and <strong>{numTags}</strong> tags.</p>
          <div className="posts">
            {
              notes
                .sort((a, b) => b.createdAt < a.createdAt ? -1 : 1)
                .map((note, key) => (<Note note={note} key={key} />))
            }
          </div>
        </div>
      )
    }}
  </Query>
)
