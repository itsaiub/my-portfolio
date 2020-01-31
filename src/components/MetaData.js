import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const MetaData = ({ title }) => {
  const {
    site: {
      siteMetadata: { siteTitle },
    },
  } = useStaticQuery(metaDataQuery)

  return (
    <Fragment>
      <Helmet title={`${title} | ${siteTitle}`}></Helmet>
    </Fragment>
  )
}

const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

export default MetaData
