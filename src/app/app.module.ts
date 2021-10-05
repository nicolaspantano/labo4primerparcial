import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoPipe } from './pages/bienvenido.pipe';
import { BusquedaPipe } from './pages/busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoPipe,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
