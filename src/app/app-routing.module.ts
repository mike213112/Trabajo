import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { IngresarComponent } from "./componentes/ingresar/ingresar.component";
import { InventarioComponent } from "./componentes/inventario/inventario.component";
import { MostrarComponent } from "./componentes/mostrar/mostrar.component";
import { ReciboComponent } from "./componentes/recibo/recibo.component";
import { FinalComponent } from './componentes/final/final.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user/principal', component: PrincipalComponent},
  {path: 'user/insert', component: IngresarComponent},
  {path: 'user/intermediate', component: MostrarComponent},
  {path: 'user/final', component: FinalComponent},
  {path: 'user/inventory', component: InventarioComponent},
  {path: 'user/receipt', component: ReciboComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
