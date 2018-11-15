import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

import { APPROUTING } from './navegacion.route';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
