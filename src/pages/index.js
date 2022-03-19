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
        alt="sakura"
        src="https://images.unsplash.com/photo-1647601160728-e29cd3cccd0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
