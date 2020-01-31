import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import {
  FaHandPeace,
  // FaLaptopCode,
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
import LifeEvent from "../components/LifeEvent"
import Skill from "../components/Skill"
import MetaData from "../components/MetaData"

const about = ({ data }) => {
  return (
    <Layout>
      <MetaData title="About" />
      <main className={styles.about}>
        <section className={styles.intro}>
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
          <hr className={styles.gradientLine} />
        </section>
        {/* <section>
          <h1>
            Work experience <FaLaptopCode />
          </h1>
          <p>
            <strong>Currently</strong> I am doing contract work on a real-time
            full-stack web application.
          </p>
          <LifeEvent
            timePeriod="July 2017 - Current"
            title="Freelancing full-stack web developer"
            details="Software Labs"
            location="Dhaka"
            current={true}
          />
          <hr className={styles.gradientLine} />
        </section> */}
        <section>
          <h1>
            Tech Skills <FaWrench />
          </h1>
          <div className={styles.skills}>
            <Skill name="JavaScript" progress={70} file="javascript" />
            <Skill name="ReactJS" progress={70} file="react" />
            <Skill name="Node" progress={60} file="node" />
            <Skill name="ExpressJS" progress={60} file="express" />
            <Skill name="MongoDB" progress={50} file="mongodb" />
            <Skill name="GatsBy" progress={45} file="gatsby" />
            <Skill name="Redux" progress={70} file="redux" />
            <Skill name="Python" progress={50} file="python" />
            <Skill name="Django" progress={50} file="django" />
            <Skill name="PostgreSQL" progress={40} file="postgres" />
            <Skill name="HTML & CSS" progress={70} file="htmlcss" />
            <Skill name="Git" progress={60} file="git" />
          </div>
          <hr className={styles.gradientLine} />
        </section>
        <section>
          <h1>
            Education <FaGraduationCap />
          </h1>
          <div style={{ marginLeft: "4rem" }}>
            <LifeEvent
              timePeriod="February 2019 - Current"
              title="Self-Learning"
              details="Node.js, Express, React.js, Gatsby.js etc"
              location="Dhaka, Bangladesh"
              current={true}
            />

            <LifeEvent
              timePeriod="February 2016 - Current"
              title="B.Sc in Computer Science Engineering"
              details="Daffodil Institute of IT"
              location="Dhaka, Bangladesh"
              current={true}
            />

            <LifeEvent
              timePeriod="June 2012 - February 2015"
              title="Higher Secondary School"
              details="Al Haj Noor Mia University College"
              location="Comilla, Bangladesh"
            />
            <LifeEvent
              timePeriod="June 2007 - April 2012"
              title="Secondary School"
              details="Dhorkora High School"
              location="Comilla, Bangladesh"
            />
          </div>
          <hr className={styles.gradientLine} />
        </section>
        <section>
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
        </section>
        <section>
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
            , etc. I am looking for a role that challenges me and where I can
            help designing solutions.
          </p>

          <h2>
            Technology <FaMicrochip />
          </h2>
          <p>
            I'm fascinated by technological advances which companies such as
            Tesla, SpaceX, Boston Dynamics make.
          </p>

          <h2>
            Coding <FaCode />
          </h2>
          <p>
            This is a classic cliché. After (or before) work, I enjoy some
            coding on the side. Also, currently I'm focused on catching up with
            current web technologies such as Node.js, React.js, JAMstack
            (Gatsby).
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
              (If you want to engange in lengthy conversations with me, these
              are the way to go.)
            </small>
          </p>
        </section>
      </main>
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
