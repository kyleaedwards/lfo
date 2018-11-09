import React from 'react'
import ProjectLink from './project-link'
import TagList from './tag-list'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

const THUMBNAIL_BASE_URL = 'https://media.graphcms.com/resize=w:180,h:180,fit:crop/'

export default ({ note }) => (
  <div className="post">
    <div className="post-meta">
      {
        note.project ? (
          <p className="post-category"><ProjectLink project={note.project} /></p>
        ) : ''
      }
      <p className="post-tags"><TagList tags={note.tags} /></p>
      <p className="post-timestamp">{ moment(note.createdAt).fromNow() }</p>
    </div>
    <div className="post-body">
      <ReactMarkdown source={note.body} />
      {
        note.images && note.images.length ? (
          <div class="note-images">
            {
              note.images.map(({ fileName, handle }) => (
                <img
                  alt={fileName}
                  src={`${THUMBNAIL_BASE_URL}${handle}`}
                />
              ))
            }
          </div>
        ) : ''
      }
    </div>
  </div>
)
