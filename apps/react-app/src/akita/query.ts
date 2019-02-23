import { Query } from "@datorama/akita";
import { CounterState, CounterStore, counterStore } from "./store";

export class CounterQuery extends Query<CounterState> {
  constructor(protected store: CounterStore) {
    super(store);
  }
}

export const counterQuery = new CounterQuery(counterStore);
