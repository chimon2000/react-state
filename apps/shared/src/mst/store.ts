import { types } from 'mobx-state-tree'

export const Store = types
  .model('Store', {
    count: types.integer
  })
  .actions(self => ({
    increment() {
      self.count = self.count + 1
    },
    decrement() {
      self.count = self.count - 1
    }
  }))

export type Store = typeof Store.Type
