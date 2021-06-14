const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Trade Bitcoin`,
    description: `Trade Bitcoin, Altcoins and Etherum with Altrady - All-In-One Multi-Exchange Cryptocurrency Trading Platform.Crypto Community Help. Crypto Trading Software Made Fast and Simple!`,
    keywords: `altrady, bitcoin, website, crypto, trading, cryptocurrency, exchange, platform`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        schemas: {
          exchanges: require("./custom_types/exchange.json"),
          sections: require("./custom_types/section.json"),
          heroSection: require("./custom_types/hero_section.json"),
          featureSection: require("./custom_types/feature_section.json"),
          trustPilot: require("./custom_types/trustpilot_reviews.json"),
          testimonial: require("./custom_types/testimonial.json"),
          benoistTestimonial: require("./custom_types/benoist_testimonial.json"),
          blogPost: require("./custom_types/blog_post.json"),
          blogCategory: require("./custom_types/blog_category.json"),
          softwareList: require("./custom_types/software_list.json"),
          courseCategory: require("./custom_types/course_category.json"),
          tutorial: require("./custom_types/tutorial.json"),
        },
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
      options: { prefixes: [`/blog-detail/*`] },
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
