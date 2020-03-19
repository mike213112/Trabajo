import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { Connec } from '../../models/connec';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'empresa-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  ListarProduct: Connec[];

  constructor(public baseService: BaseService) { }

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

  onSubmit(productForm: NgForm){
    this.baseService.ingresarProductoFinal(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
