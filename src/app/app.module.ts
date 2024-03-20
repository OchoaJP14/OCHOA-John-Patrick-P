import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SecondPagePage } from './Second-page/Second-page.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Shared } from './Shared/Shared';

@NgModule({
  declarations: [AppComponent, SecondPagePage, Shared],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
