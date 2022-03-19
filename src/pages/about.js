// Step 1: Import React
import * as React from 'react'
// Import the Link component from the Gatsby package and add a link to your Home page.
// import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
