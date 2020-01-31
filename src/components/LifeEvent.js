import React from "react"
import styles from "../css/lifeevent.module.css"
import { FaCalendar, FaMapPin } from "react-icons/fa"

const LifeEvent = ({ timePeriod, title, details, location, current }) => {
  const dot = current ? (
    <div className={styles.dotCurrent}>dd</div>
  ) : (
    <div className={styles.dot}>dd</div>
  )
  return (
    <article className={styles.event}>
      {dot}
      <p className={styles.info}>
        <span className={styles.timePeriod}>
          <FaCalendar />
          {timePeriod}
        </span>

        <span className={styles.location}>
          <FaMapPin />
          {location}
        </span>
      </p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.details}>{details}</p>
    </article>
  )
}

export default LifeEvent
