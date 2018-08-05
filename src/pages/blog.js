import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostListing from '../components/postListing'

const Blog = data => (
  <StaticQuery
    query={graphql`
      query PostData {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h1>Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
      </Layout>
    )}
  />
)

export default Blog
