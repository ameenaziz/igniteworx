module.exports = {
  siteMetadata: {
    title: 'Igniteworx | web and mobile apps',
    pageHeader: 'Igniteworx',
    footer: '&copy; 2020'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
