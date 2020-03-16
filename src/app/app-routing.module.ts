import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { IngresarComponent } from "./componentes/ingresar/ingresar.component";
import { InventarioComponent } from "./componentes/inventario/inventario.component";
import { MostrarComponent } from "./componentes/mostrar/mostrar.component";
import { ReciboComponent } from "./componentes/recibo/recibo.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: 'recibo', component: ReciboComponent},
  {path: 'final', component: ReciboComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
