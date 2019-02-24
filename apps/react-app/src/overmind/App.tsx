import React from 'react'
import { useOvermind } from './state'

export default function App() {
  return (
    <div>
      <Counter />
      <Counter />
    </div>
  )
}

function Counter() {
  const { state, actions } = useOvermind()

  return (
    <div>
      <h1>Counter</h1>
      <div>{state.count}</div>
      <button onClick={actions.increment}>Increment</button>
    </div>
  )
}
