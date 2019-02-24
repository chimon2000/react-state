import { Injectable } from '@angular/core'
import { Store as CounterStore } from 'shared/lib/mst'

@Injectable()
export default class Store {
  constructor() {
    return CounterStore.create({
      count: 0
    })
  }
}
