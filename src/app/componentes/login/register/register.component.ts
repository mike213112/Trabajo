import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'empresa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: LoginService,
              private router: Router,
              private toastr: ToastrService) { }

  public email: string;
  public password: string;
  public islogged: false;

  ngOnInit(): void {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.toastr.success('Usuario Registrado correctamente')
     this.router.navigate(['/principal']);
    }).catch( (err) => {
      this.toastr.error('No se puedo registrar el usuario')
    });
  }

}
