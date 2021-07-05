const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllDetailPage {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            type_group {
              support
              select_type
            }
            short_description
            slug
            icon {
              url
            }
            benefit_group {
              title
              content
              image {
                alt
                url
              }
            }
          }
        }
      }
      allPrismicBlogPostApi(sort: { fields: data___date, order: DESC }) {
        nodes {
          data {
            title
            slug
            featured
            date
            category {
              id
            }
            content {
              type
              text
              url
              alt
              oembed {
                provider_name
                type
                html
                embed_url
                title
              }
              spans {
                start
                end
                type
                data {
                  url
                  target
                  link_type
                }
              }
            }
            summary
            thumbnail {
              url
              alt
            }
            meta_title
            meta_keywords
            meta_description
          }
        }
      }
      allPrismicFeatures(
        sort: { order: ASC, fields: data___feature_group___priority }
      ) {
        nodes {
          data {
            feature_group {
              name
              slug
              description
              featured_in_navbar
              type
              icon {
                url
              }
            }
          }
        }
      }
      allPrismicCourseCategory {
        nodes {
          data {
            name
            description
            text
            slug
            course_cover {
              url
            }
          }
          prismicId
        }
      }
      allPrismicTutorial(sort: { order: ASC, fields: first_publication_date }) {
        nodes {
          data {
            category {
              id
            }
            name
            duration
            slug
            description {
              raw
            }
            video_embed
          }
        }
      }
    }
  `)

  const exchangeTemplate = path.resolve(`src/pages/exchange.js`)
  const blogTemplate = path.resolve(`src/pages/blog-detail.js`)
  const featureTemplate = path.resolve(`src/pages/feature.js`)
  const courseTemplate = path.resolve(`src/pages/course.js`)
  const tutorialTemplate = path.resolve(`src/pages/tutorial.js`)

  queryResults.data?.allPrismicExchanges.nodes.forEach(node => {
    createPage({
      path: `/exchanges/${node.data.slug}`,
      component: exchangeTemplate,
      context: {
        exchange: node,
      },
    })
  })

  queryResults.data?.allPrismicBlogPostApi.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.data.slug}`,
      component: blogTemplate,
      context: {
        blogDetail: node,
      },
    })
  })

  queryResults.data?.allPrismicFeatures.nodes[0].data.feature_group.forEach(
    node => {
      createPage({
        path: `/${node.slug}`,
        component: featureTemplate,
        context: {
          feature: node,
        },
      })
    }
  )

  queryResults.data?.allPrismicCourseCategory.nodes.forEach(node => {
    createPage({
      path: `/academy/${node.data.slug}`,
      component: courseTemplate,
      context: {
        course: node,
      },
    })
  })

  queryResults.data?.allPrismicTutorial.nodes.forEach(node => {
    createPage({
      path: `/academy/${node.data.slug}`,
      component: tutorialTemplate,
      context: {
        tutorial: node,
      },
    })
  })
}
