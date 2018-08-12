import React from 'react'
import { Link } from 'gatsby'

const PostListing = ({ post }) => (
  <div>
    <span>{post.frontmatter.date}</span>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
  </div>
)

export default PostListing
