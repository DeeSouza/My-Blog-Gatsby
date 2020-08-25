import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ListPostsQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                background
                category
                title
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
              }
              timeToRead
            }
          }
        }
      }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />

      {postList.map(({ 
        node: { 
          frontmatter: { background, category, date, description, title },
          timeToRead,
          fields: { slug }
        } 
      }) => (
        <PostItem 
          key={slug}
          slug={slug}
          category={category}
          background={background}
          title={title}
          date={date}
          description={description}
          timeToRead={timeToRead}
        />
      ))}      
    </Layout>
  )
}

export default IndexPage;