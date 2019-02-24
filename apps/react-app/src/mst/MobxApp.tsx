import React from 'react'
import { observer } from 'mobx-react'
import { store } from './store'
import { Store } from 'shared/lib/mst/store'

type Props = {
  store: Store
}

const App = observer((props: Props) => (
  <div>
    <h1>Counter</h1>
    <div>{props.store.count}</div>
    <button onClick={props.store.increment}>Increment</button>
  </div>
))

export default () => <App store={store} />
