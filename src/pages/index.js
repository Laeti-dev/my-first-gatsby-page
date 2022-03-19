// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
// Import the Link component from the Gatsby package and add a link to your About page
// import { Link } from 'gatsby'
// but now we created the layout component we want to use it instead of the hardcoded link
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="lucie"
        src="../images/lucie.jpeg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
