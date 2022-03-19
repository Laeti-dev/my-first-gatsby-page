import * as React from 'react'
import { Link } from 'gatsby'
// Import the scc style (eache class individually)
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
  } from './layout.module.css'

// instead of using the (props)
// the { pageTitle, children } is called a Javascript destructuring technique
//  it's a way to declare a variable based on an object properties
// it's like doing const pageTitle = props.pageTitle
// and const children = props.children
const Layout = ({ pageTitle, children }) => {
  return (
    // after importing the css, class can be defined like below
    <div className={ container }>
      <title>{ pageTitle }</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
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
