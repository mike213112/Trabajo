import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { Connec } from '../../models/connec';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'empresa-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  public fechajalar: string;
  listarMaterialesIntermedios: Connec[];
  listarMaterialesFinales: Connec[];

  constructor(private baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

  public isLogged: boolean;
  public email: string;

  ngOnInit() {
    this.baseService.getProductIntermedia()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMaterialesIntermedios = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMaterialesIntermedios.push(x as Connec)
      })
    })
    this.baseService.getProductFinal()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMaterialesFinales = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMaterialesFinales.push(x as Connec)
      })
    })
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    })
  }
  
  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

  Delect($key: string){
    if(confirm('Estas seguro de querer eliminar este producto del inventario?')){
      this.baseService.DeleteProductFinal($key);
    this.toastr.success("El producto ha sido eliminado con exito")
    }
  }

}
