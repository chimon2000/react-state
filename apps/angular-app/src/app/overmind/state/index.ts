import { Overmind, IConfig } from 'overmind'
import { OvermindService } from 'overmind-angular'
import { Injectable } from '@angular/core'

import { state } from './state'
import * as actions from './actions'

export const config = { state, actions }

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

@Injectable()
export class Store extends OvermindService<typeof config> {}
