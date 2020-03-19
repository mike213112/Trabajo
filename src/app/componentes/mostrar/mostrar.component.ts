import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { NgForm } from '@angular/forms'
import { Connec } from '../../models/connec';

@Component({
  selector: 'empresa-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  constructor(public baseService: BaseService) { }

  ngOnInit(){
    this.baseService.getProduct();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    this.baseService.ingresarProductoIntermedio(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
