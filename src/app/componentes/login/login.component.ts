import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'empresa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;

  public password: string;

  constructor(private router: Router,
              private autenticar: LoginService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
    this.autenticar.loginEmail(this.email, this.password)
    .then( (res) => {
      this.toastr.success('Bienvenido','Operacion Exitosa');
      this.router.navigate(['/user/principal']);
    }).catch((err) => {
      this.toastr.error('Sus credenciales no son correctas','Operacion Incorrecta');
      this.router.navigate(['/login']);
    });
  }
  
}
