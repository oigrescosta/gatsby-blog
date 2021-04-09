/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

const articles = [
    {id: 1, title:"The first title", content: "The first content"},
    {id: 2, title:"The second title", content: "The second content"},
    {id: 3, title:"The third title", content: "The third content"},
]

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    articles.forEach(({id, title, content}) => {
        createPage({
          path: `/articles/${id}`,
          component: require.resolve("./src/templates/article"),
          context: { 
              id,
              title,
              content
           }
        })
      })

    const allArticles = graphql(`
        {
            allStrapiArticle {
                nodes {
                  id
                  title
                  content
                }
              }
        }
        
    `).then(result => {
        const allArticles = result.data.allStrapiArticle.nodes
        allArticles.forEach(({id, title, content}) => {
            createPage({
                path: `/articles/strapi/${id}`,
                component: require.resolve("./src/templates/article"),
                context: { 
                    id,
                    title,
                    content
                 }
              })
        })
        console.log("Graphql.then allArticles result", result)
    })
}

