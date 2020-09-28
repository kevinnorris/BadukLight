import React from 'react'
import ReactDOM from 'react-dom'

import GameBoard from './game-board'

class MyComponent extends React.Component {
  render() {
    return <GameBoard />
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
