import React from 'react'
import ProjectLink from './project-link'
import TagList from './tag-list'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default ({ project }) => (
  <div className="post" key={project.label}>
    <div className="post-meta">
      <h3><ProjectLink project={project} /></h3>
      <div><TagList tags={project.tags} /></div>
      <p className="post-timestamp">Last updated: { moment(project.updatedAt).fromNow() }</p>
    </div>
    <div className="post-body">
      <ReactMarkdown source={project.body} />
      <div className="project-links">
        {
          project.links && project.links.github ? (
            <a href={project.links.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : ''
        }
      </div>
    </div>
  </div>
)