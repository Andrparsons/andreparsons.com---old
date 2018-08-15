---
title: Styled Components
date: '2018-08-12'
---

I'll be using styled components in order keep all of the code for each section in its own file. In order to get started we need the following NPM packages:

1. gatsby-plugin-styled-components
2. styled-components
3. babel-plugin-styled-components

Styled Components can be used like this in my header for example:

```javascript
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.45rem 1.0875rem;
  margin-bottom: 1.45rem;
  height: 95px;
  a {
    text-decoration: none;
  }
`

const MainNav = styled.nav`
  display: flex;
  ul {
    list-style: none;
    margin-bottom: 0;
    li {
      margin-bottom: 0;
      a {
        text-decoration: none;
        }
      }
    }
  } 
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link to="/">AP</Link>
    </h1>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{ siteTitle }</Link>
    </h1>
    <h4 style={{ margin: 0 }}>
      <MainNav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </MainNav>
    </h4>
  </HeaderWrapper>
)

export default Header

`
```

Each styled component instance makes a new element that can be swapped in just like any other React component, this has the very useful property of keeping the css scoped to each component so I don't have to worry about collision.

I've also gone ahead and created About and Contact pages to link to. The Link component in Gatsby will take care of all the routing so all that needs to be done is add two react components named about.js and contact.js and drop them into the pages folder.