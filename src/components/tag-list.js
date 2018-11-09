import React from 'react'
import TagLink from './tag-link'

export default ({ tags }) => {
  const tagList = (tags || []).map(t => t.label)
  return (
    <span className="tag-list">
      {
        tagList.reduce((out, tag) => {
          out.push(<TagLink key={tag} tag={tag} />)
          out.push(', ')
          return out
        }, []).slice(0, -1)
      }
    </span>
  )
}