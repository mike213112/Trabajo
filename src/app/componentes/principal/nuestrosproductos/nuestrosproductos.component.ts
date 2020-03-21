import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'empresa-nuestrosproductos',
  templateUrl: './nuestrosproductos.component.html',
  styleUrls: ['./nuestrosproductos.component.scss']
})
export class NuestrosproductosComponent implements OnInit {

  constructor(private authService: LoginService,
              private toastr: ToastrService,
              private router: Router) { }

  public isLogged: boolean;

  ngOnInit(){

  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

}
