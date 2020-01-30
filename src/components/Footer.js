import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaCode, FaHeart } from "react-icons/fa"

import styles from "../css/footer.module.css"

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, version },
    },
  } = useStaticQuery(metaDataQuery)
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.line}>
          <span style={{ color: "green" }} className={styles.icon}>
            <FaCode />
          </span>
          with
          <span style={{ color: "red" }} className={styles.icon}>
            <FaHeart />
          </span>
          by <span style={{ fontSize: "1rem" }}>&nbsp;{author}</span>
        </p>
        <p className={styles.line}>
          &copy;
          {new Date().getFullYear()} built with
          <a href="https://www.gatsby.org" alt="GatsbyJS">
            <img
              src="/images/gatsby-logo.svg"
              alt="GatsbyJS"
              className={styles.gatsbyLogo}
            />
          </a>
        </p>
      </div>
      <p className={styles.version}>version: {version}</p>
    </footer>
  )
}

const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        version
      }
    }
  }
`

export default Footer
