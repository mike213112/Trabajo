import { Component, OnInit } from '@angular/core';
import { Quemar } from 'src/app/api/quemar';
import { BaseService } from '../../services/base.service';
import { Connec } from '../../models/connec';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'empresa-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  agregarArray: Quemar[] = [
    { id: 1, peso: 190, codigo: 'hola12', envio: "San Jose Acatempa" },
    { id: 2, peso: 190, codigo: 'hola12123', envio: "San Jose Pinula" }
  ]

  listarMateriales: Connec[];
  productList: AngularFireList<any>;
  constructor(private baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

  ngOnInit() {
    this.baseService.getProduct()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMateriales = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMateriales.push(x as Connec)
      })
    })
  }
  
  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Cierre de session con exito');
  }

  Delect($key: string){
    if(confirm('Estas seguro de querer eliminar este producto del inventario?')){
      this.baseService.DeleteProduct($key);
    this.toastr.success("El producto ha sido eliminado con exito")
    }
  }

}
