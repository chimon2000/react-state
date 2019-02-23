import { OvermindService } from 'overmind-angular'
import { Injectable } from '@angular/core'
import { config } from 'shared'

@Injectable()
export class Store extends OvermindService<typeof config> {}
