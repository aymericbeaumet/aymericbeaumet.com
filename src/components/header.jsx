import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import classes from './header.module.scss'
import Logo from '../images/aymericbeaumet-logo.svg'
import CategoryLink from './category-link'
import Contact from './contact'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            email
            menu {
              name
              url
              categorySlug
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)

function Header({ data }) {
  const {
    site: {
      siteMetadata: { menu },
    },
  } = data
  return (
    <header className={classes.Header}>
      <nav role="navigation">
        <ul>
          <li className={classes.logo} key="logo">
            <Link to="/" activeClassName={classes.active}>
              <Logo />
            </Link>
          </li>
          {menu.map(({ name, url, categorySlug }) => (
            <li key={name}>
              <CategoryLink
                to={url}
                activeClassName={classes.active}
                categorySlug={categorySlug}
              >
                {name}
              </CategoryLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={classes.contact}>
        <Contact />
      </nav>
    </header>
  )
}
