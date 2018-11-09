import React from 'react'
import { Link } from 'react-router-dom'

export default ({ project }) => (
  <Link to={`/projects/${project.label}`}>{ project.title }</Link>
)
