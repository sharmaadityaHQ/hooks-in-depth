import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import State from './State'
import Effect from './Effect'
import Context from './Context'

const App = () => {
  return (
    <div className='App'>
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
