import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import classes from './index.module.scss'
import ExternalLink from '../components/external-link'
import aymericBeaumetProfile from '../images/aymeric-beaumet-profile.jpg'

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        title
        github
        stackoverflow
      }
    }
  }
`

export default function AboutAymericBeaumet({ data }) {
  const {
    site: {
      siteMetadata: { author, github, stackoverflow },
    },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>{author} Blog</title>
      </Helmet>
      <section className={classes.About}>
        <h1>Hey traveler,</h1>
        <h2>Welcome to my part of the internet</h2>

        <p>
          {'My name is '}
          <strong>{author}</strong>
          {`. I am a Senior Software Engineer working on backend and infrastructure, with a focus on maintainability, resilience and high availability.`}
        </p>

        <p>
          {'I am '}
          <strong>passionate about computer science</strong>
          {
            ', and it has been so since I was 13. I am now lucky enough to live from that passion.'
          }
        </p>

        <p>
          {'I am '}
          <strong>an enthusiast learner.</strong>
          {
            ' I firmly believe that struggling is the best way to progress.'
          }
        </p>

        <p>
          {' I '}
          <ExternalLink href={`${github}?tab=repositories&type=source`}>
            maintain
          </ExternalLink>
          {' some open-source projects, do my best to '}
          <ExternalLink href={`${stackoverflow}?tab=anwsers`}>
            help
          </ExternalLink>
          {' people. I also write about '}
          <Link to="/posts">what I do</Link>
          {' and '}
          <Link to="/notes">what I learn</Link>
          {'.'}
        </p>

        <p>
          {'I would love to know more about you, feel free to get in touch.'}
        </p>

        <p>
          Best,
          <br />
          Aymeric
        </p>
      </section>
    </Layout>
  )
}
