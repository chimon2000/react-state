import { CounterStore, counterStore } from "./store";

export class BooksService {
  constructor(private counterStore: CounterStore) {}

  increment = () => {
    this.counterStore.setState(state => ({ count: state.count + 1 }));
  };
  decrement = () => {
    this.counterStore.setState(state => ({ count: state.count - 1 }));
  };
}

export const counterService = new BooksService(counterStore);
