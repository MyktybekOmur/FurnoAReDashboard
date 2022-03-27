import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate(['']);
  }
  reloadPage() {
    window.location.reload();
  }

}
