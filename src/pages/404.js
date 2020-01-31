import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaChevronRight } from "react-icons/fa"

import Layout from "../components/Layout"
import styles from "../css/notfound.module.css"
import MetaData from "../components/MetaData"

const NotFound = () => {
  return (
    <Layout>
      <MetaData title="Page Not Found" />
      <section className={styles.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          <AniLink fade to="/" className={styles.button}>
            Head back to home <FaChevronRight />
          </AniLink>
        </p>
      </section>
    </Layout>
  )
}

export default NotFound
