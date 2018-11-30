const _ = require('lodash')

const siteMetadata = {
  title: 'Aymeric Beaumet',
  description: "I'm a from Paris, France.",
  siteUrl: `https://${process.env.HOSTNAME || 'aymericbeaumet.com'}`,
  author: 'Aymeric Beaumet',
  email: 'hi@aymericbeaumet.com',
  disqusShortname: 'aymericbeaumet',
  algoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID || '',
  algoliaSearchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY || '',
  algoliaIndexName: process.env.ALGOLIA_INDEX_NAME || '',
  menu: [
    {
      name: 'articles',
      url: '/articles',
      categorySlug: 'article',
    },
    {
      name: 'talks',
      url: '/talks',
      categorySlug: 'talk',
    },
  ],
}

const plugins = [
  'gatsby-plugin-sharp', // required by gatsby-remark-images
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/data/`,
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: siteMetadata.title,
      short_name: 'A. Beaumet',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: `${__dirname}/src/images/aymericbeaumet.png`,
    },
  },
  'gatsby-plugin-offline',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-feed',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-react-svg',
  'gatsby-plugin-robots-txt',
  `gatsby-plugin-sass`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_self',
            rel: 'nofollow noopener noreferrer',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 590,
            withWebp: true,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: './static/',
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        { resolve: 'gatsby-remark-smartypants' },
        { resolve: 'gatsby-remark-responsive-iframe' },
        { resolve: 'gatsby-remark-autolink-headers' },
      ],
    },
  },
]

function withAlgolia(plugins = []) {
  const { algoliaApplicationId, algoliaIndexName } = siteMetadata
  const algoliaAdminApiKey = process.env.ALGOLIA_ADMIN_API_KEY
  if (!(algoliaApplicationId && algoliaAdminApiKey && algoliaIndexName)) {
    return plugins
  }
  return [
    ...plugins,
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: algoliaApplicationId,
        apiKey: algoliaAdminApiKey,
        indexName: algoliaIndexName,
        chunkSize: 10000,
        queries: [
          {
            query: `{
              allMarkdownRemark {
                edges {
                  node {
                    objectID: id
                    frontmatter {
                      title
                      date
                      tags
                    }
                    fields {
                      category
                    }
                    content: rawMarkdownBody
                  }
                }
              }
            }`,
            transformer: ({ data }) =>
              data.allMarkdownRemark.edges.map(({ node }) => {
                const flattened = flattenObject(node)
                return {
                  ...flattened,
                  date: (new Date(flattened.date).getTime() / 1000) | 0,
                }
              }),
          },
        ],
      },
    },
  ]
}

function flattenObject(object, init = {}) {
  return _.reduce(
    object,
    (acc, value, key) => {
      if (_.isPlainObject(value)) {
        return flattenObject(value, acc)
      }
      acc[key] = value
      return acc
    },
    init,
  )
}

module.exports = {
  siteMetadata,
  plugins: withAlgolia(plugins),
}
