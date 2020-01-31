import React from "react"
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

import Layout from "../components/Layout"
import styles from "../css/contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <p>
          My preferred way of contact is via&nbsp;
          <a
            href="https://wa.me/8801521408723?text=Hello!%20%20I'm%20interested%20talk%20with%20you."
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <FaWhatsapp />
          </a>
          &nbsp;or&nbsp;
          <a
            className={styles.link}
            href="mailto:itsaiub@gmail.com"
            alt="Mail to itsaiub@gmail.com"
          >
            e-mail&nbsp;
            <FaEnvelope />
            &nbsp;
          </a>
          . Feel free to check out my social media presence below to get to know
          me better.
        </p>
        <div className={styles.icons}>
          <a
            href="https://www.twitter.com/a1ubkh4n"
            class={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://github.com/itsaiub"
            class={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://facebook.com/a1ubkh4n"
            class={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/a1ubkh4n"
            class={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/a1ubkh4n/"
            class={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <h1>Additional information</h1>
        <table className={styles.table}>
          <tr>
            <td>Phone</td>
            <td className={styles.monospace}>+880-1521-408723</td>
          </tr>
          <tr>
            <td>Email</td>
            <td className={styles.monospace}>itsaiub@gmail.com</td>
          </tr>
        </table>
      </section>
    </Layout>
  )
}

export default ContactPage
