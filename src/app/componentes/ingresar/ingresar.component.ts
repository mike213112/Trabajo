import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { NgForm } from '@angular/forms';
import { Connec } from 'src/app/models/connec';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { element } from 'protractor';

@Component({
  selector: 'empresa-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  listarProveedores: Connec[];

  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

              public isLogged: boolean;
              public email: string;      


              //soloparaadmins@gmail.com

              /*  this.baseService.getProductFinal()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMateriales = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMateriales.push(x as Connec)
      })
    })*/
  ngOnInit(){
    this.baseService.getProveedores()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarProveedores = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarProveedores.push(x as Connec)
      })
    })
    this.baseService.getProductPrincipal();
    this.resetForm();
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    })
  }

  onSubmit(myform: NgForm){
    this.baseService.IngresarMateriaPrima(myform.value);
    this.toastr.success('Se agrego un nuevo producto')
    this.resetForm(myform);
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

  resetForm(myform?: NgForm){
    if(myform != null)
      myform.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
