import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import links from "../constants/headerLinks"
import styles from "../css/header.module.css"

const Header = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(authorQuery)

  return (
    <header className={styles.header}>
      <h1>
        <AniLink fade className={styles.title} to="/">
          {`${author}'s Portfolio`}
        </AniLink>
      </h1>
      <ul className={styles.navList}>
        {links.map((item, index) => (
          <li key={index}>
            <AniLink
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              fade
              to={item.path}
            >
              {item.text}
            </AniLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

const authorQuery = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Header
