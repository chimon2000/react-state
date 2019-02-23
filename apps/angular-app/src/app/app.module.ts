import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import {
  OVERMIND_INSTANCE,
  OvermindService,
  OvermindModule
} from 'overmind-angular'
import { Overmind } from 'overmind'
import { Store } from './overmind/state'
import { config } from 'shared'
import { CounterComponent } from './overmind/state/counter.component'

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, OvermindModule],
  providers: [
    { provide: OVERMIND_INSTANCE, useValue: new Overmind(config) },
    { provide: Store, useExisting: OvermindService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
