import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { NgForm } from '@angular/forms'
import { Connec } from '../../models/connec';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'empresa-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService) { }

  ngOnInit(){
    this.baseService.getProduct();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    this.baseService.ingresarProductoIntermedio(productForm.value);
    this.toastr.success('Se agrego un nuevo producto','Operacion Exitosa')
    this.resetForm(productForm);
  }

  onClickLogout() {
    this.authService.logout();
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
