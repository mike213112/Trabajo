import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'empresa-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router,
              private authService: LoginService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Cierre de session con exito');
  }

}
