import { Overmind, IConfig } from 'overmind'
import { state } from './state/state'
import * as actions from './state/actions'

export const config = { state, actions }

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = new Overmind(config, {
  devtools: true // 'localhost:3031'
})

export { State } from './state/state'
