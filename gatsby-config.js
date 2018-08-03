module.exports = {
  siteMetadata: {
    title: 'Andre Parsons',
    author: 'Andre Parsons',
    description: 'Personal blog and portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
