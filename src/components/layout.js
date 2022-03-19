import * as React from 'react'
// Import the useStaticQuery hook and the graphql tag from the gatsby package.
import { Link, useStaticQuery, graphql } from 'gatsby'
// Import the scc style (eache class individually)
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'


// instead of using the (props)
// the { pageTitle, children } is called a Javascript destructuring technique
//  it's a way to declare a variable based on an object properties
// it's like doing const pageTitle = props.pageTitle
// and const children = props.children
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    // after importing the css, class can be defined like below
    <div className={ container }>
      <title>{ pageTitle } | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{ pageTitle }</h1>
        { children }
      </main>
    </div>
  )
}

export default Layout
