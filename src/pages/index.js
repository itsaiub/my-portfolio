import React from "react"
import Typist from "react-typist"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import styles from "../css/home.module.css"
import { FaHeart } from "react-icons/fa"
import MetaData from "../components/MetaData"

export default () => {
  return (
    <Layout>
      <MetaData title="Home" />
      <div className={styles.container}>
        <h1 className={styles.typing}>
          <Typist avgTypingDelay={120} stdTypingDelay={25}>
            <span>Hello!</span>
            <Typist.Backspace count={6} delay={2000} />
            <span>I'm a FullStack JavaScript Developer</span>
            <Typist.Backspace count={35} delay={2000} />
            <span> know React</span>
            <Typist.Backspace count={5} delay={2000} />
            <span> Redux</span>
            <Typist.Backspace count={5} delay={2000} />
            <span> Express</span>
            <Typist.Backspace count={7} delay={2000} />
            <span> MongoDB</span>
            <Typist.Backspace count={7} delay={2000} />
            <span> Mongoose</span>
            <Typist.Backspace count={8} delay={2000} />
            <span> Django</span>
            <Typist.Backspace count={6} delay={2000} />
            <span> PostgreSQL</span>
            <Typist.Backspace count={23} delay={2000} />
            <span>Hello!</span>
            <Typist.Backspace count={0} delay={2000} />
          </Typist>
        </h1>
        <h2 className={styles.title}>
          I'm Ayub and
          <br />
          I&nbsp;
          <span title="love" className={styles.icon}>
            <FaHeart className={styles.icon} />
          </span>
          &nbsp;JavaScript!
        </h2>
        <p>
          I am a <strong>full-stack JavaScript developer</strong> living in
          Dhaka, Bangladesh.
        </p>
        <p>
          I mostly work with <strong>JavaScript</strong> (Node.js &amp;
          React.js), but have also experience with <strong>Django</strong>,
          <strong>Python</strong>, and others.
        </p>
        <p>
          If you have any web development needs, feel free to{" "}
          <AniLink fade to="/contact" className={styles.link}>
            contact
          </AniLink>
          &nbsp; or&nbsp;
          <AniLink fade to="/about" className={styles.link}>
            get to know me a little better
          </AniLink>
          .
        </p>
      </div>
    </Layout>
  )
}
