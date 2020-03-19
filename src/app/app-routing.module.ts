import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { IngresarComponent } from "./componentes/ingresar/ingresar.component";
import { InventarioComponent } from "./componentes/inventario/inventario.component";
import { MostrarComponent } from "./componentes/mostrar/mostrar.component";
import { ReciboComponent } from "./componentes/recibo/recibo.component";
import { FinalComponent } from './componentes/final/final.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user/principal', component: PrincipalComponent, canActivate: [AuthGuard]},
  {path: 'user/insert', component: IngresarComponent, canActivate: [AuthGuard]},
  {path: 'user/intermediate', component: MostrarComponent, canActivate: [AuthGuard]},
  {path: 'user/final', component: FinalComponent, canActivate: [AuthGuard]},
  {path: 'user/inventory', component: InventarioComponent, canActivate: [AuthGuard]},
  {path: 'user/receipt', component: ReciboComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
