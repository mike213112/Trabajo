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

              public isLogged: boolean;
              public email: string;

  ngOnInit(){
    this.baseService.getProductIntermedia();
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

  onSubmit(productForm: NgForm){
    this.baseService.IngresarMateriaIntermidia(productForm.value);
    this.toastr.success('Se agrego un nuevo producto')
    this.resetForm(productForm);
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
