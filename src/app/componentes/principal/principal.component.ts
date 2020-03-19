import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'empresa-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router,
              private authService: LoginService) { }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.authService.logout();
  }

}
