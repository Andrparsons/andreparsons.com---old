import React, { Component } from 'react'
import styled from 'styled-components'

export default class Menu extends Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <>
        {on && (
          <MenuWrapper>
            <Background onClick={toggle} />
            <MenuCard>
              <CloseButton onClick={toggle}>Close</CloseButton>
              <div>{children}</div>
            </MenuCard>
          </MenuWrapper>
        )}
      </>
    )
  }
}

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10;
`

const MenuCard = styled.div`
  flex: 0 0 50%;
  background: white;
  display: grid;
  grid-template-rows: 95px 1fr;
`

const Background = styled.div`
  flex: 0 0 50%;
  background: black;
  opacity: 0.5;
`
const CloseButton = styled.button`
  border: none;
  padding: 1.45rem 1.0875rem;
  background: transparent;
  justify-self: end;
`

