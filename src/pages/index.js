import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PostItem 
      slug="/about/"
      category="Misc"
      background="red"
      title="Teste"
      date="20 de Agosto de 2020"
      description="Lorem Ipsum Dolor"
      timeToRead="30" 
    />
  </Layout>
)

export default IndexPage
