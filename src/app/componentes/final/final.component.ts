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
  listarPerfiles: Connec[];
  listarMedidas: Connec[];
  listarHorario: Connec[];

  constructor(public baseService: BaseService,
              private toastr: ToastrService,
              private router: Router,
              private authService: LoginService,
              private firebase: AngularFireDatabase) { }

              public isLogged: boolean;
              public email: string;

  ngOnInit(){
    this.baseService.getProductFinal();
    this.resetForm();
    this.baseService.getProductIntermedia()  
    .snapshotChanges()
    .subscribe(item => {
      this.ListarProduct = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ListarProduct.push(x as Connec)
      })
    })
    this.baseService.getHorario()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarHorario = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarHorario.push(x as Connec)
      })
    })
    this.baseService.getPerfiles()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarPerfiles = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarPerfiles.push(x as Connec)
      })
    })
    this.baseService.getMedidas()  
    .snapshotChanges()
    .subscribe(item => {
      this.listarMedidas = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarMedidas.push(x as Connec)
      })
    })
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.email = auth.email;
      }else{
        this.isLogged = false;
      }
    })
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

  onSubmit(productForm: NgForm){
    this.baseService.IngresarMateriaFinal(productForm.value);
    this.toastr.success('Se agrego un nuevo producto')
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null)
    productForm.reset();
      this.baseService.selectedProduct = new Connec();
  }

}
