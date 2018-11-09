import React from 'react'
import Note from '../components/note'
import Project from '../components/project'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default ({ match }) => {
  const query = gql`
    {
      tags(where: {
        label: "${match.params.label}"
      }) {
        label
        notes(last: 5) {
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
            handle,
            fileName
          }
        }
        projects {
          title
          label
          body
          updatedAt
          tags {
            label
          }
        }
      }
    }
  `
  const title = (<h2>{ match.params.label }</h2>)
  return (
    <Query query={query}>
    {({ loading, data }) => {
      console.log(data)
      if (loading) {
        return (
          <div className="single tag-single">
            { title }
            <div className="loading">
              Loading...
            </div>
          </div>
        )
      }
      const { tags } = data;
      const [tag] = tags;
      if (!tag) {
        return (
          <div className="single tag-single">
            { title }
            <p className="expos">There are no notes or projects associated with this tag.</p>
          </div>
        )
      }
      const { projects, notes } = tag;
      const noteList = notes || [];
      return (
        <div className="single tag-single">
          { title }
          <h3>Projects</h3>
          <div className="posts">
            { projects.map((project, key) => (<Project project={project} key={key} />)) }
          </div>
          <h3>Latest Notes</h3>
          <div className="posts">
            {
              noteList
              .sort((a, b) => b.createdAt < a.createdAt ? -1 : 1)
              .map((note, key) => (
                <Note note={note} key={key} />
              ))
            }
          </div>
        </div>
      )
    }}
  </Query>)
}
