const path = require("path")
const linkResolver = require("./src/utils/linkResovler")
const siteUrl = `https://altrady.netlify.app/`

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Trade Bitcoin`,
    description: `Trade Bitcoin, Altcoins and Etherum with Altrady - All-In-One Multi-Exchange Cryptocurrency Trading Platform.Crypto Community Help. Crypto Trading Software Made Fast and Simple!`,
    keywords: `altrady, bitcoin, website, crypto, trading, cryptocurrency, exchange, platform`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allPrismicBlogPostApi {
            nodes {
              data {
                slug
              }
              last_publication_date
            }
          }
          allSitePage {
            nodes {
              path
              context {
                blogDetail {
                  data {
                    slug
                    flag_page
                  }
                }
                exchange {
                  data {
                    flag_page
                  }
                }
                course {
                  data {
                    flag_page
                  }
                }
                feature {
                  data {
                    flag_page
                  }
                }
                tutorial {
                  data {
                    flag_page
                  }
                }
              }
            }
          }
        }
      `,
        output: `/`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allPrismicBlogPostApi: { nodes: allBlogs },
          allSitePage: { nodes: allPages },
        }) => {
          return allPages
            .filter(
              page =>
                (page.context &&
                  page.context.blogDetail &&
                  page.context.blogDetail.data.flag_page !== true) ||
                (page.context &&
                  page.context.exchange &&
                  page.context.exchange.data.flag_page !== true) ||
                (page.context &&
                  page.context.feature &&
                  page.context.feature.data.flag_page !== true) ||
                (page.context &&
                  page.context.course &&
                  page.context.course.data.flag_page !== true) ||
                (page.context &&
                  page.context.tutorial &&
                  page.context.tutorial.data.flag_page !== true)
            )
            .map(page => {
              let blog = allBlogs.filter(item => {
                return page.path === "/blog/" + item.data.slug
              })
              if (blog.length > 0) return { ...page, ...blog[0] }
              else
                return {
                  ...page,
                  last_publication_date: new Date(),
                }
            })
        },
        serialize: ({ path, last_publication_date }) => {
          return {
            url: path,
            lastmod: last_publication_date,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N6R3CC2",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://altrady.netlify.app/",
        sitemap: "https://altrady.netlify.app/sitemap-0.xml",
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
      options: { prefixes: [`/category/*`] },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://altrady.netlify.app/`,
        stripQueryString: true,
      },
    },
  ],
}
