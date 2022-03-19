import * as React from 'react'
import Layout from '../components/layout'
// Step 1: Import the graphql tag
import { graphql } from 'gatsby'
// With useStaticQuery, your query was defined inside your component.

// Gatsby will run your page query and pass the resulting data into your page component as a prop called data
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {/* Step 3: Use the data in your component*/}
      <ul>
        {
          data.allFile.nodes.map( node => (
            // In React, when you use the .map() method to render a list of elements, you should give each element in the list a unique key prop. This helps React keep track of what values have changed and need to be rerendered.
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
// Step 2: Export a page query
export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
  `
export default BlogPage
