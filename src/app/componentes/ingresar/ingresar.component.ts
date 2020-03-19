import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { NgForm } from '@angular/forms';
import { Connec } from 'src/app/models/connec';

@Component({
  selector: 'empresa-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  constructor(public baseService: BaseService) { }

  ngOnInit(){
    this.baseService.getProduct();
    this.resetForm();
  }

  onSubmit(myform: NgForm){
    this.baseService.insertarMateriaPrima(myform.value);
    this.resetForm(myform);
  }

  resetForm(myform?: NgForm){
    if(myform != null)
      myform.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
