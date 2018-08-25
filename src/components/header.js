import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Toggle from '../utils/Toggle'
import Menu from './menu'

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
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Toggle>
      {({ on, toggle }) => (
        <>
          <button onClick={toggle}>Menu</button>
          <Menu on={on} toggle={toggle}>
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
          </Menu>
        </>
      )}
    </Toggle>
  </HeaderWrapper>
)

export default Header
