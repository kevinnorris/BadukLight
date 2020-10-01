import React from 'react'
import ReactDOM from 'react-dom'

import Goban from './goban'

class MyComponent extends React.Component {
  render() {
    return <Goban />
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
