import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaSun, FaMoon } from "react-icons/fa"

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
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            const button =
              theme === "dark" ? (
                <span title="Day Mode">
                  <FaSun />
                </span>
              ) : (
                <span title="Night Mode">
                  <FaMoon />
                </span>
              )
            return (
              <label className={styles[`${theme}Mode`]}>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  className={styles.darkModeInput}
                />
                {button}
                <span className={styles.invisible}>Toggle dark theme</span>
              </label>
            )
          }}
        </ThemeToggler>
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
