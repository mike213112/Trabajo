import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'empresa-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {

  constructor(private authService: LoginService,
              private router: Router,
              private toastr: ToastrService) { }

              public isLogged: boolean;
              public email: string;

  ngOnInit() {
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/principal']);
    this.toastr.success('Cierre de session con exito');
  }

}
