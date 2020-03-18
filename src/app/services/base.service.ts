import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Connec } from '../models/connec';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  productList: AngularFireList<any>;
  selectedProduct: Connec = new Connec();

  constructor(private firebase: AngularFireDatabase) { 

  }

  getProduct(){
    return this.productList = this.firebase.list('products');
  }

  insertarMateriaPrima(product: Connec){
    this.productList.push({
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    });
  }

  UpdateProduct(product: Connec){
    this.productList.update(product.$key,{
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    })
  }

  DeleteProduct($key: string){
    this.productList.remove($key)
  }

}
