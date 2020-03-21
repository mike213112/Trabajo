import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { IngresarComponent } from "./componentes/ingresar/ingresar.component";
import { InventarioComponent } from "./componentes/inventario/inventario.component";
import { MostrarComponent } from "./componentes/mostrar/mostrar.component";
import { ReciboComponent } from "./componentes/recibo/recibo.component";
import { FinalComponent } from './componentes/final/final.component';
import { NuestrosproductosComponent } from './componentes/principal/nuestrosproductos/nuestrosproductos.component';
import { ContactoComponent } from './componentes/principal/contacto/contacto.component';
import { AyudaComponent } from './componentes/principal/ayuda/ayuda.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'principal/user/insert', component: IngresarComponent, canActivate: [AuthGuard]},
  {path: 'principal/user/intermediate', component: MostrarComponent, canActivate: [AuthGuard]},
  {path: 'principal/user/final', component: FinalComponent, canActivate: [AuthGuard]},
  {path: 'principal/user/inventory', component: InventarioComponent, canActivate: [AuthGuard]},
  {path: 'principal/user/receipt', component: ReciboComponent, canActivate: [AuthGuard]},
  {path: 'principal/user/receipt', component: ReciboComponent, canActivate: [AuthGuard]},
  {path: 'principal/nuestros-productos', component: NuestrosproductosComponent},
  {path: 'principal/Contacto', component: ContactoComponent},
  {path: 'principal/ayuda', component: AyudaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
