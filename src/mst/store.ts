import { types } from "mobx-state-tree";

const Store = types
  .model("Store", {
    count: types.integer
  })
  .actions(self => ({
    increment() {
      self.count = self.count + 1;
    },
    decrement() {
      self.count = self.count - 1;
    }
  }));

export const store = Store.create({
  count: 0
});

export type Store = typeof store;
