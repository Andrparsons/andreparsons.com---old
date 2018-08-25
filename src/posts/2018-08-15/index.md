---
title: Toggle & Modal Menu
date: '2018-08-15'
---

Time to step out from Gastby and do some old fashioned React

With React it is a good idea to break things down into small reusable components. Here is a simple toggle component that can me used to render children when the toggle state is on. It is unopinionated and can be used for anything at all.

```javascript
// a simple reuseable component that has a on/off state and a function to toggle it

import { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}
```

Note that the state and toggle funtion have been passed to the children as props, so they can be used like this.

```javascript
<Toggle>
  {({ on, toggle }) => (
    <>
      <button onClick={toggle}>Menu</button>
      <Menu on={on} toggle={toggle}>
        <p>Anything to be conditionally rendered goes here</p>
      </Menu>
    </>
  )}
</Toggle>
```

This will create a button that toggle the state and render a menu component with access to the state. Inside of the Menu component a conditional check will determine if the menu is rendered or not.

```javascript
export default class Menu extends Component {
  render() {
    const { children, toggle, on } = this.props
    return (
      <>
        {on && (
          <MenuWrapper>
            <CloseButton onClick={toggle}>Close</CloseButton>
            <div>{children}</div>
          </MenuWrapper>
        )}
      </>
    )
  }
}
```

Since these components are unopinionated anything that can be rendered can be thrown in, so for now I am just going to copy over my navigation menu. This is quite ugly but fuctional, so for the next update I will be styling the Menu component.