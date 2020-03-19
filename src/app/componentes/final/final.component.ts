import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { Connec } from '../../models/connec';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'empresa-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  ListarProduct: Connec[];



  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService,
              private firebase: AngularFireDatabase) { }



              
  ngOnInit(){
    this.baseService.getProduct();
    this.resetForm();
    this.baseService.getProduct()  
    .snapshotChanges()
    .subscribe(item => {
      this.ListarProduct = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarProduct.push(x as Connec)
      })
    })
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Cierre de session con exito');
  }

  onSubmit(productForm: NgForm){
    this.baseService.ingresarProductoFinal(productForm.value);
    
    this.toastr.success('Se agrego un nuevo producto')
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
