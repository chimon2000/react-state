import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from './index'

@Component({
  selector: 'counter-view',
  template: `
    <div *track>
      <div>
        <h1>Counter</h1>
        <div>{{ state.count }}</div>
        <button (click)="actions.increment()">Increment</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  state = this.store.select()
  actions = this.store.actions

  constructor(private store: Store) {}
}
