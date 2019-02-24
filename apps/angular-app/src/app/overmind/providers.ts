import { OVERMIND_INSTANCE, OvermindService } from 'overmind-angular'
import { Overmind } from 'overmind'
import { config } from 'shared'
import { Store } from './state'

export default [
  { provide: OVERMIND_INSTANCE, useValue: new Overmind(config) },
  { provide: Store, useExisting: OvermindService }
]
