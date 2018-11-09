import React from 'react'
import Note from '../components/note'
import TagList from '../components/tag-list'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'

export default ({ match }) => {
  const query = gql`
    {
      projects(where: {
        label: "${match.params.label}"
      }) {
        title
        label
        body
        updatedAt
        tags {
          label
        }
        links
        notes(last: 5) {
          id
          body
          createdAt
          tags {
            label
          }
          images {
            handle
            fileName
          }
        }
      }
    }
  `
  return (<Query query={query}>
    {({ loading, data }) => {
      console.log(data)
      if (loading) {
        return (
          <div className="single project-single">
            <h2>Projects</h2>
            <div className="loading">
              Loading...
            </div>
          </div>
        )
      }
      const { projects } = data
      const project = projects[0]
      if (!project) {
        return (
          <div className="single project-single">
            <h2>Projects</h2>
            <div className="loading">
              No project found with label {match.label}.
            </div>
          </div>
        )
      }
      const { title, notes, tags, body } = project
      const noteList = notes || []
      console.log(noteList);
      return (
        <div className="single project-single">
          <h2>{ title }</h2>
          <div className="project-body">
            <ReactMarkdown source={body} />
          </div>
          <div className="project-tags">
            <h3>Tags</h3>
            <TagList tags={tags} />
          </div>
          <div className="project-links">
            {
              project.links && project.links.github ? (
                <a href={project.links.github}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              ) : ''
            }
          </div>
          {
            noteList && noteList.length ? (
              <div className="project-notes">
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
            ) : ''
          }
        </div>
      )
    }}
  </Query>)
}
