import { state, mutation } from '@loona/react'
import gql from 'graphql-tag'

export const count = gql`
  query count @client {
    count {
      count: Int
    }
  }
`

export const hello = gql`
  query hello @client {
    hello: String
  }
`

export const incrementCount = gql`
  mutation @client {
    incrementCount: Int
  }
`

@state({
  defaults: {
    count: { count: 0 },
    hello: 'world'
  }
})
export class CounterState {
  @mutation(incrementCount)
  incrementCount(args, { patchQuery, ...rest }) {
    console.log(rest)
    patchQuery(count, data => data + 1)

    return
  }
}
