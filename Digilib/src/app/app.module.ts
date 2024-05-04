import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAiLBXWx01x2PszHpBsBIrZMRH9htZlOuQ",
  authDomain: "appdev-project-5763d.firebaseapp.com",
  projectId: "appdev-project-5763d",
  storageBucket: "appdev-project-5763d.appspot.com",
  messagingSenderId: "572594889317",
  appId: "1:572594889317:web:1212c8366e446f60605c8c",
  measurementId: "G-0FQ9Q3013E"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  app = initializeApp(firebaseConfig);
}
