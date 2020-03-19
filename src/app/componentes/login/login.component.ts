import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'empresa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;

  public password: string;

  constructor(private router: Router,
              private autenticar: LoginService) { }

  ngOnInit(): void {
  }
 
  public Entrar(){
    this.router.navigate(['/user/principal']);
  }

  onSubmitLogin() {
    this.autenticar.loginEmail(this.email, this.password)
    .then( (res) => {
      
      this.router.navigate(['/privado']);
    }).catch((err) => {
      
      this.router.navigate(['/login']);
    });
  }
  
}
