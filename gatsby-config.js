const path = require("path")
const linkResolver = require("./src/utils/linkResovler")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Trade Bitcoin`,
    description: `Trade Bitcoin, Altcoins and Etherum with Altrady - All-In-One Multi-Exchange Cryptocurrency Trading Platform.Crypto Community Help. Crypto Trading Software Made Fast and Simple!`,
    keywords: `altrady, bitcoin, website, crypto, trading, cryptocurrency, exchange, platform`,
    siteUrl: `https://altrady.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://altrady.netlify.app/",
        sitemap: "https://altrady.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-resolve-src`,
      oprions: {
        src: path.resolve(__dirname, "src"),
        utils: path.resolve(__dirname, "utils"),
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "altrady",
        lang: "*",
        schemas: {
          exchanges: require("./custom_types/exchanges.json"),
          features: require("./custom_types/features.json"),
          partners: require("./custom_types/partners.json"),
          blogPost: require("./custom_types/blog_post.json"),
          blogCategory: require("./custom_types/blog_category.json"),
          courseCategory: require("./custom_types/course_category.json"),
          tutorial: require("./custom_types/tutorial.json"),
          roadmap: require("./custom_types/roadmap.json"),
        },
        linkResolver: () => doc => linkResolver(doc),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Altrady",
        short_name: "Altrady",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/imgs/favicon.svg",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/tutorial/*`] },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/category/*`] },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/course/*`] },
    },
  ],
}
