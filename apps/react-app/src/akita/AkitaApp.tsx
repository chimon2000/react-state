import * as React from 'react'
import { counterQuery } from './query'
import { Subscription } from 'rxjs'
import { counterService } from './service'

export default class App extends React.PureComponent {
  state: { count: number } = { count: 0 }
  subscription?: Subscription
  componentDidMount() {
    this.subscription = counterQuery
      .select(state => state.count)
      .subscribe(count => this.setState({ count }))
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.state.count}</div>
        <button onClick={counterService.increment}>Increment</button>
      </div>
    )
  }
}
