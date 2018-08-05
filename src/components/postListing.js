import React from 'react'
import { Link } from 'gatsby'

const PostListing = ({ post }) => (
  <div>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <span>{post.frontmatter.date}</span>
  </div>
)

export default PostListing
