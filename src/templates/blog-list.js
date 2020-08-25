import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";
import SEO from '../components/seo';

const BlogListTemplate = props => {
    const postList = props.data.allMarkdownRemark.edges;

    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
    const nextPage = `/page/${currentPage + 1}`;

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

            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    )
}
        
export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
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
`;

export default BlogListTemplate;