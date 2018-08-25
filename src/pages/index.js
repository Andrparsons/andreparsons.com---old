import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Main = styled.div`

`

const IndexPage = () => (
  <Layout>
    <Main>
      <h1>Hi I'm Andre</h1>
      <p>I make websites and blog about web development</p>
      <Link to='/blog'>Check out the Blog!</Link>
    </Main>
  </Layout>
)

export default IndexPage
