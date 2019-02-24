import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
// import { CounterComponent } from './overmind/state/counter.component'
import { OvermindModule } from 'overmind-angular'
import { MobxAngularModule } from 'mobx-angular'

import overmindProviders from './overmind/providers'
import mstProviders from './mst/providers'
import { CounterComponent } from './mst/counter.component'

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, MobxAngularModule],
  providers: [...mstProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
