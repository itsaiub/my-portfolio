require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title:
      "Full-Stack Web Developer | Md.Ayub Khan | JavaScript, Node.js, React.js",
    author: "Md. Ayub Khan",
    version: "1.0.0",
  },
  plugins: [
    // Using Transition effect on Page change
    `gatsby-plugin-transition-link`,
    // For loading files from the file system into GraphQL
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    // For speedy and optimized image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
