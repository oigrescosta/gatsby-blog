import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log("IndexPage.render data", data)
  return (
    <Layout>
    <SEO title="Home" />
      {data.allStrapiArticle.nodes.map(article => (
        <Link to={`/articles/strapi/${article.id}`}>
          <div> 
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      nodes {
        id
        title
        content
      }
    }
  }
`