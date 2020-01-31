import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styles from "../css/skill.module.css"

const Skill = ({ name, file, progress }) => {
  const { skills } = useStaticQuery(skillQuery)

  const imageNode = skills.edges
    .map(edge => {
      return {
        name: edge.node.name,
        fixed: edge.node.childImageSharp.fixed,
      }
    })
    .filter(node => node.name === file)[0]

  const image = (
    <article className={styles.skill}>
      <div className={styles.details}>
        <div>{name}</div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className={styles.progressNumber}>{progress}%</span>
      </div>
      <Image
        className={styles.image}
        fixed={imageNode.fixed}
        alt={`Logo for ${name}`}
      />
    </article>
  )

  return <React.Fragment>{image}</React.Fragment>
}

const skillQuery = graphql`
  query {
    skills: allFile(
      filter: {
        absolutePath: { regex: "/images/skills/" }
        extension: { eq: "png" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 130) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default Skill
