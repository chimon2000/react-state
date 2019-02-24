import { Component, ChangeDetectionStrategy } from '@angular/core'
import Store from './store'

@Component({
  selector: 'counter-view',
  template: `
    <div>
      <div>
        <h1>Counter</h1>
        <div>{{ store.count }}</div>
        <button (click)="store.increment()">Increment</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  constructor(private store: Store) {}
}
