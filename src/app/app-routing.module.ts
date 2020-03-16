import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/logincomponent";
import { PrincipalComponent } from "./componentes/principal/principalncomponent";
import { IngresarComponent } from "./componentes/ingresar/ingresarcomponent";
import { InventarioComponent } from "./componentes/inventario/inventariocomponent";
import { MostrarComponent } from "./componentes/mostrar/mostrarcomponent";
import { ReciboComponent } from "./componentes/recibo/recibocomponent";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: 'recibo', component: ReciboComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
