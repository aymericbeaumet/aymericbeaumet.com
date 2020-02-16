import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Posts from '../components/posts'
import Layout from '../components/layout'

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { categorySlug: { eq: "post" } } }
    ) {
      ...PostsRequirements
    }
  }
`

export default function PostsPage({ data }) {
  const {
    site: {
      siteMetadata: { author },
    },
    posts,
  } = data
  return (
    <Layout>
      <Helmet>
        <title>{`Posts by ${author}`}</title>
      </Helmet>
      <Posts allMarkdownRemark={posts} />
    </Layout>
  )
}
