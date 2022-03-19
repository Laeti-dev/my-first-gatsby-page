module.exports = {
  siteMetadata: {
    title: `Discovering Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        // gets set to the sourceInstanceName field for each file.
        path: `${__dirname}/blog`,
        // adds all the files in the folder specified by the path option to the data layer.
      }
    }
  ],
}
