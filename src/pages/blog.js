import * as React from 'react'
import Layout from '../components/layout'
// Step 1: Import the graphql tag
import { graphql } from 'gatsby'
// With useStaticQuery, your query was defined inside your component.
//  to render the actual contents of your MDX blog posts.
import { MDXRenderer } from 'gatsby-plugin-mdx'


// Gatsby will run your page query and pass the resulting data into your page component as a prop called data
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {/* Step 3: Use the data in your component*/}
        {
          data.allMdx.nodes.map( node => (
            // In React, when you use the .map() method to render a list of elements, you should give each element in the list a unique key prop. This helps React keep track of what values have changed and need to be rerendered.
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.datePublished}</p>
              {/* MDX render expects to receive compiled MDX */}
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
    </Layout>
  )
}
// Step 2: Export a page query
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
      nodes {
        frontmatter {
          datePublished(formatString: "MMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`
export default BlogPage
