import React from 'react';
import {  graphql } from 'gatsby';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <h1>Title: {post.frontmatter.title}</h1>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  } `

export default BlogPostTemplate;