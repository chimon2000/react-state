import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'

import { LoonaProvider, createLoona, Query, Mutation } from '@loona/react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { states } from './states'
import { hello, incrementCount, count } from './counter/counter.state'

// Instance of a cache
const cache = new InMemoryCache()

// Create Loona Link
const loona = createLoona(cache)

// Apollo
const client = new ApolloClient({
  link: loona,
  cache
})

const Count = () => (
  <Query query={count}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      console.log(data)
      return <div>{data}</div>
    }}
  </Query>
)
const Increment = () => (
  <Mutation mutation={incrementCount}>
    {() => <button>Increment</button>}
  </Mutation>
)

const App = () => (
  <div>
    <h1>Counter</h1>
    <Count />
    <Increment />
  </div>
)

export const LoonaApp = () => (
  <ApolloProvider client={client}>
    <LoonaProvider loona={loona} states={states}>
      <App />
    </LoonaProvider>
  </ApolloProvider>
)
