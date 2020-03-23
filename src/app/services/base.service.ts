import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Connec } from '../models/connec';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  login: any = false;

  productListMateriaPrima: AngularFireList<any>;
  productListMateriaIntermidia: AngularFireList<any>;
  productListMateriaFinal: AngularFireList<any>;

  obtenerProveedores: AngularFireList<any>;
  obtenerHorario: AngularFireList<any>;
  obtenerPerfil: AngularFireList<any>;
  obtenerMedidas: AngularFireList<any>;

  selectedProduct: Connec = new Connec();

  constructor(private firebase: AngularFireDatabase) {

  }

  getProveedores(){
    return this.obtenerProveedores = this.firebase.list('Proveedores')
  }
  
  getHorario(){
    return this.obtenerHorario = this.firebase.list('Horario')
  }

  getPerfiles(){
    return this.obtenerPerfil = this.firebase.list('Perfiles')
  }

  getMedidas(){
    return this.obtenerMedidas = this.firebase.list('Medidas')
  }

  getProductPrincipal(){
    return this.productListMateriaPrima = this.firebase.list('MateriaPrima');
  }

  getProductIntermedia(){
    return this.productListMateriaIntermidia = this.firebase.list('MateriaIntermedia');
  }

  getProductFinal(){
    return this.productListMateriaFinal = this.firebase.list('MateriaFinal');
  }

  Proveedores(product: Connec){
    this.obtenerProveedores.push({
      proveedor: product.proveedor
    })
  }

  Horario(product: Connec){
    this.obtenerHorario.push({
      horario: product.horario
    })
  }

  Perfiles(product: Connec){
    this.obtenerPerfil.push({
      perfiles: product.perfiles
    })
  }

  Medidas(product: Connec){
    this.obtenerMedidas.push({
      medidas: product.medidas
    })
  }

  IngresarMateriaPrima(product: Connec){
    this.productListMateriaPrima.push({
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    });
  }

  IngresarMateriaIntermidia(product: Connec){
    this.productListMateriaIntermidia.push({
      fecha1: product.fecha1,
      codigo1: product.codigo1,
      peso1: product.peso1,
    })
  }

  IngresarMateriaFinal(product: Connec){
    this.productListMateriaFinal.push({
      operador: product.operador,
      linea: product.linea,
      fecha: product.fecha,
      horario: product.horario,
      codigo2: product.codigo2,
      perfiles: product.perfiles,
      medidas: product.medidas
    })
  }

  UpdateProductPrincipal(product: Connec){
    this.productListMateriaPrima.update(product.$key,{
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    })
  }

  UpdateProductIntermedia(product: Connec){
    this.productListMateriaPrima.update(product.$key,{
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    })
  }

  UpdateProductFinal(product: Connec){
    this.productListMateriaPrima.update(product.$key,{
      cliente: product.cliente,
      peso: product.peso,
      codigo: product.codigo,
      envio: product.envio
    })
  }

  DeleteProductPrincipal($key: string){
    this.productListMateriaPrima.remove($key)
  }

  DeleteProductIntermedia($key: string){
    this.productListMateriaPrima.remove($key)
  }
  
  DeleteProductFinal($key: string){
    this.productListMateriaPrima.remove($key)
  }

}
