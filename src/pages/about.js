import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import {
  FaHandPeace,
  FaLaptopCode,
  FaWrench,
  FaGraduationCap,
  FaLanguage,
  FaSmile,
  FaPlane,
  FaTv,
  FaCode,
  FaMicrochip,
} from "react-icons/fa"
import Layout from "../components/Layout"
import styles from "../css/about.module.css"

const about = ({ data }) => {
  console.log(data.profilePic.childImageSharp)

  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.intro}>
          <div>
            <Image
              fixed={data.profilePic.childImageSharp.fixed}
              alt="Md. Ayub"
              title="Ayub's Photo"
              className={styles.profilePic}
            />
          </div>
          <div className={styles.introText}>
            <h1>
              Hello <FaHandPeace />
            </h1>
            <p>
              Hi, I'm Ayub, 24-something-year-old{" "}
              <strong>full-stack web developer</strong> 💻 with a strong
              educational background in computer science engineering. I am doing
              freelance work 🚀 <strong>based in Dhaka, Bangladesh</strong>, but
              I do work remotely.
            </p>
          </div>
        </div>
        <hr className={styles.gradientLine} />
        <h1>
          Work experience <FaLaptopCode />
        </h1>
        <p>
          <strong>Currently</strong> I am doing contract work on a real-time
          full-stack web application.
        </p>
        <hr className={styles.gradientLine} />

        <h1>
          Tech Skills <FaWrench />
        </h1>

        <hr className={styles.gradientLine} />

        <h1>
          Education <FaGraduationCap />
        </h1>
        <hr className={styles.gradientLine} />

        <h1>
          Language Skills
          <FaLanguage />
        </h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Bangla</td>
              <td>Fluent</td>
            </tr>
            <tr>
              <td>English </td>
              <td>Fluent</td>
            </tr>

            <tr>
              <td>German</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>Comilla</td>
              <td>Mothertongue</td>
            </tr>
          </tbody>
        </table>

        <hr className={styles.gradientLine} />
        <h1>
          Interests <FaSmile />
        </h1>
        <h2>
          Travel <FaPlane />
        </h2>
        <p>
          If you want to hire me, I'm interested to work in companies that
          offer&nbsp;
          <strong>
            modern technologies such as Node.js, Express.js React.js
          </strong>
          , etc. I am looking for a role that challenges me and where I can help
          designing solutions.
        </p>
      </div>
      <h2>
        Technology <FaMicrochip />
      </h2>
      <p>
        I'm fascinated by technological advances which companies such as Tesla,
        SpaceX, Boston Dynamics make.
      </p>

      <h2>
        Coding <FaCode />
      </h2>
      <p>
        This is a classic cliché. After (or before) work, I enjoy some coding on
        the side. Also, currently I'm focused on catching up with current web
        technologies such as Node.js, React.js, JAMstack (Gatsby).
      </p>

      <h2>
        Cinema & TV <FaTv />
      </h2>
      <p>
        I love almost any kind of movie, but I always prefer Marvel and DC
        movies. As of TV: I enjoy my sitcoms like F·R·I·E·N·D·S (all-time
        favorite), TBBT as well as superhero-themed shows (Agent of Shield,
        Gotham, Daredevil, IronFist), dramas (Narcos, Person of Interest,
        Breaking Bad, GoT), among others.
        <br />
        <small>
          (If you want to engange in lengthy conversations with me, these are
          the way to go.)
        </small>
      </p>
    </Layout>
  )
}

export const query = graphql`
  {
    profilePic: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default about
