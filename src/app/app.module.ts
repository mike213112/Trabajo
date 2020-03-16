import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { InventarioComponent } from './componentes/inventario/inventario.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';
import { FinalComponent } from './componentes/final/final.component';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    IngresarComponent,
    MostrarComponent,
    InventarioComponent,
    ReciboComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
